"use client";

import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type Message = {
   id: string;
   text: string;
   isUser: boolean;
   source?: string;
   createdAt: number;
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
   const inputRef = useRef<HTMLInputElement | null>(null);

   // INIT
   useEffect(() => {
      const welcomeMessage: Message = {
         id: uuidv4(),
         text: "Hai 👋\nAku asisten virtual Muhammad Hidayat Mauluddin.\nMau tahu tentang pengalaman, skill, atau project beliau? Tanya saja ya 😊",
         isUser: false,
         createdAt: Date.now(),
      };

      try {
         const stored = localStorage.getItem("chat_messages");

         if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
               setMessages(parsed);
            } else {
               setIsOpen(true);
               setMessages([welcomeMessage]);
            }
         } else {
            setIsOpen(true);
            setMessages([welcomeMessage]);
         }
      } catch {
         localStorage.removeItem("chat_messages");
         setMessages([welcomeMessage]);
      }

      setIsLoaded(true);
   }, []);

   // SAVE
   useEffect(() => {
      if (isLoaded) {
         localStorage.setItem("chat_messages", JSON.stringify(messages));
      }
   }, [messages, isLoaded]);

   // AUTO SCROLL
   useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
   }, [messages, loading]);

   // AUTO FOCUS
   useEffect(() => {
      if (isOpen) {
         setTimeout(() => inputRef.current?.focus(), 100);
      }
   }, [isOpen]);

   // FETCH FAQ
   useEffect(() => {
      const fetchFaq = async () => {
         try {
            const res = await fetch(`${CHATBOT_API_URL}/api/faq`);
            const data = await res.json();
            setFaqs(data);
         } catch {
            console.error("Failed to fetch FAQ");
         }
      };

      fetchFaq();
   }, [CHATBOT_API_URL]);

   // SEND TO BOT
   const sendToBot = async (question: string) => {
      if (loading) return;

      const userMessage: Message = {
         id: uuidv4(),
         text: question,
         isUser: true,
         createdAt: Date.now(),
      };

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

         if (!res.ok) {
            throw new Error(data?.detail || "Something went wrong");
         }

         const botMessage: Message = {
            id: uuidv4(),
            text: data.answer || "No response from server",
            isUser: false,
            source: data.source,
            createdAt: Date.now(),
         };

         // small delay for realism
         await new Promise((res) => setTimeout(res, 400));

         setMessages((prev) => [...prev, botMessage]);
      } catch (err: any) {
         setMessages((prev) => [
            ...prev,
            {
               id: uuidv4(),
               text: err.message || "Error connecting to server",
               isUser: false,
               createdAt: Date.now(),
            },
         ]);
      } finally {
         setLoading(false);
      }
   };

   const sendMessage = () => {
      if (!input.trim() || loading) return;
      sendToBot(input);
      setInput("");
   };

   const handleQuickQuestion = (question: string) => {
      sendToBot(question);
   };

   const clearChat = () => {
      setMessages([]);
      localStorage.removeItem("chat_messages");
   };

   return (
      <>
         {/* FLOATING BUTTON */}
         {!isOpen && (
            <button
               aria-label="Open chat"
               onClick={() => setIsOpen(true)}
               className="fixed bottom-5 right-5 border border-surface bg-background text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl hover:scale-105 transition"
            >
               💬
            </button>
         )}

         {/* CHATBOX */}
         {isOpen && (
            <div className="fixed bottom-5 right-5 w-[90vw] max-w-sm bg-background border border-surface shadow-xl rounded-2xl flex flex-col overflow-hidden">
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
                  {messages.map((msg) => (
                     <div
                        key={msg.id}
                        className={msg.isUser ? "text-right" : "text-left"}
                     >
                        <div
                           className={`inline-block px-3 py-2 rounded-lg max-w-[75%] ${
                              msg.isUser
                                 ? "bg-background text-white"
                                 : "bg-surface text-white"
                           }`}
                        >
                           {msg.text.split("\n").map((line, i) => (
                              <p key={i}>{line}</p>
                           ))}

                           {msg.source && (
                              <div className="text-xs opacity-70 mt-1">
                                 Source: {msg.source}
                              </div>
                           )}
                        </div>
                     </div>
                  ))}

                  {/* LOADING */}
                  {loading && (
                     <div className="text-left">
                        <div className="bg-surface text-white px-3 py-2 rounded-lg inline-block animate-pulse">
                           Assistant is typing...
                        </div>
                     </div>
                  )}

                  <div ref={messagesEndRef} />
               </div>

               {/* INPUT */}
               <div className="flex border-t border-surface p-3">
                  <input
                     ref={inputRef}
                     maxLength={250}
                     disabled={loading}
                     className="flex-1 p-2 outline-none text-sm text-white bg-transparent"
                     placeholder="Ask something..."
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                           e.preventDefault();
                           sendMessage();
                        }
                     }}
                  />
                  <button
                     disabled={loading}
                     onClick={sendMessage}
                     className="px-4 bg-primary hover:bg-primaryDark text-white text-sm rounded-lg ml-2 transition disabled:opacity-50"
                  >
                     Send
                  </button>
               </div>
            </div>
         )}
      </>
   );
}
