"use client";

import { useState, useEffect, useRef } from "react";

type Message = {
  text: string;
  isUser: boolean;
  source?: string;
};

type FAQ = {
  question: string;
  answer: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const CHATBOT_API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL;

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedMessages = localStorage.getItem("chat_messages");

    const welcomeMessage: Message = {
      text: "Hai 👋\nAku asisten virtual Muhammad Hidayat Mauluddin.\nMau tahu tentang pengalaman, skill, atau project beliau? Tanya saja ya 😊",
      isUser: false,
    };
    if (storedMessages) {
      const parsed = JSON.parse(storedMessages);

      if (parsed.length > 0) {
        setMessages(parsed);
      } else {
        setIsOpen(true);
        setMessages([welcomeMessage]);
      }
    } else {
      setIsOpen(true);
      setMessages([welcomeMessage]);
    }
    setIsLoaded(true);
  }, []);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("chat_messages", JSON.stringify(messages));
    }
  }, [messages, isLoaded]);

  // AUTO SCROLL
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // FETCH FAQ

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const res = await fetch(`${CHATBOT_API_URL}/api/faq`);
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        console.error("Failed to fetch FAQ");
      }
    };

    fetchFaq();
  }, [CHATBOT_API_URL]);

  // SEND MESSAGE (REUSABLE)

  const sendToBot = async (question: string) => {
    const userMessage: Message = { text: question, isUser: true };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch(`${CHATBOT_API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      const botMessage: Message = {
        text: data.answer || data.detail,
        isUser: false,
        source: data.source,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "Error connecting to server", isUser: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // INPUT SEND
  const sendMessage = async () => {
    if (!input.trim()) return;
    sendToBot(input);
    setInput("");
  };

  // QUICK QUESTION CLICK
  const handleQuickQuestion = (question: string) => {
    sendToBot(question);
  };

  // CLEAR CHAT
  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chat_messages");
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 border border-surface bg-background text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl hover:scale-105 transition"
        >
          💬
        </button>
      )}

      {/* CHATBOX */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-background border border-surface shadow-xl rounded-2xl flex flex-col overflow-hidden">
          {/* HEADER */}
          <div className="bg-background border-b border-surface text-white p-3 flex justify-between items-center">
            <span className="font-semibold">Assistant</span>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="text-xs bg-surface px-2 py-1 rounded"
              >
                Clear
              </button>
              <button onClick={() => setIsOpen(false)}>✖</button>
            </div>
          </div>

          {/* CHAT AREA */}
          <div className="h-80 overflow-y-auto p-3 space-y-3">
            {/* QUICK QUESTIONS */}
            {faqs.length > 0 && messages.length <= 1 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {faqs.slice(0, 4).map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickQuestion(faq.question)}
                    className="text-xs text-white bg-surface px-3 py-2 rounded-full hover:bg-background transition"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}

            {/* MESSAGES */}
            {messages.map((msg, i) => (
              <div key={i} className={msg.isUser ? "text-right" : "text-left"}>
                <div
                  className={`inline-block px-3 py-2 rounded-lg max-w-[75%] ${
                    msg.isUser
                      ? "bg-background text-white"
                      : "bg-surface text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* LOADING */}
            {loading && (
              <div className="text-left">
                <div className="bg-surface text-white px-3 py-2 rounded-lg inline-block">
                  AI is thinking...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className="flex border-t border-surface p-3">
            <input
              maxLength={250}
              className="flex-1 p-2 outline-none text-sm text-white bg-transparent"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="px-4 bg-primary hover:bg-primaryDark text-white text-sm rounded-lg ml-2 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
