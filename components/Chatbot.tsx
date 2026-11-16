"use client";

import { useState, useRef, useEffect } from "react";
import robot from "@/assets/robot.png";
import { MessageCircle, X, Send } from "lucide-react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { getFeaturedFAQ } from "@/lib/faq-ui";
import { sendChatMessage } from "@/lib/chat/client";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

type Msg = {
  role: "bot" | "user";
  text: string;
  time: string;
  id?: string;
  source?: string;
};

const formatHistory = (messages: Msg[]) => {
  return messages
    .filter((m) => m.role === "user" || m.role === "bot")
    .slice(-6)
    .map((m) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: m.text,
    }));
};

export function Chatbot() {
  const { locale } = useLanguage();
  const t = getTranslation(locale);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: t.chatbot.initialMessage,
      time: "now",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1) {
        return [
          {
            role: "bot",
            text: t.chatbot.initialMessage,
            time: "now",
          },
        ];
      }
      return prev;
    });
  }, [t.chatbot.initialMessage]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);

    const el = textareaRef.current;
    if (el) {
      el.style.height = "0px";
      el.style.height = el.scrollHeight + "px";
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open, loading]);

  const sendToBot = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    // handle /clear command locally
    if (trimmed === "/clear") {
      setMessages([
        {
          role: "bot",
          text: t.chatbot.initialMessage,
          time: "now",
        },
      ]);
      setInput("");
      return;
    }

    const userMsg: Msg = {
      id: uuidv4(),
      role: "user",
      text: trimmed,
      time: "now",
    };

    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // include latest message
      const history = formatHistory([...messages, userMsg]);

      const response = await sendChatMessage(trimmed, history);

      const botMsg: Msg = {
        id: uuidv4(),
        role: "bot",
        text: response.answer,
        time: "now",
        source: response.source,
      };

      await new Promise((r) => setTimeout(r, 300));

      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";

      setMessages((m) => [
        ...m,
        {
          id: uuidv4(),
          role: "bot",
          text: message,
          time: "now",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const send = (text: string) => sendToBot(text);

  return (
    <>
      {/* Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] origin-bottom-right transition-all duration-300 ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-secondary/90 rounded-3xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] flex flex-col h-[520px] max-h-[calc(100vh-8rem)]">
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/5 flex items-center gap-3 bg-primary/15">
            <div className="relative">
              <div className="size-10 rounded-full bg-primary/20 ring-1 ring-primary/40 grid place-items-center">
                <Image src={robot} width={64} height={64} alt="robot" />
              </div>
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display font-semibold leading-tight">
                {t.chatbot.title}
              </div>
              <div className="text-xs text-muted-foreground">
                {t.chatbot.sub}
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="size-8 grid place-items-center rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-5 space-y-3"
          >
            {messages.map((m, i) => (
              <div
                key={m.id || i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-white/5 border border-white/5 text-foreground rounded-bl-md"
                  }`}
                >
                  {m.text}

                  {m.source && (
                    <div className="text-[10px] opacity-60 mt-1">
                      Source: {m.source}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="pt-2 flex flex-wrap gap-2">
                {getFeaturedFAQ(4).map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => send(faq.question)}
                    className="text-xs px-3 py-1.5 rounded-full glass hover:bg-white/10 text-muted-foreground hover:text-foreground transition"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="text-xs text-muted-foreground">
                {t.chatbot.typing}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-white/5 flex items-center gap-2"
          >
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder={t.chatbot.placeholder}
              rows={1}
              className="flex-1 resize-none overflow-hidden bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-white/10 transition whitespace-pre-wrap"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="size-10 grid place-items-center rounded-full bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(80,200,255,0.4)] transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-[0_10px_40px_rgba(80,200,255,0.45)] hover:scale-105 active:scale-95 transition cursor-pointer"
      >
        <div className="relative size-6">
          <MessageCircle
            className={`absolute inset-0 size-6 transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
          />
          <X
            className={`absolute inset-0 size-6 transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
          />
        </div>
        {!open && (
          <span className="absolute -top-1 -right-1 size-3.5 rounded-full bg-emerald-400 ring-2 ring-background animate-pulse" />
        )}
      </button>
    </>
  );
}
