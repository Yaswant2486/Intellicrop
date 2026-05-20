"use client";

import { useState } from "react";

export type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "bot", text: "Hello! I'm your agricultural AI assistant. How can I help?" },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();

      const cleaned = String(data?.response ?? "No response")
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/#/g, "");

      setMessages((prev) => [...prev, { role: "bot", text: cleaned }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Server error. Please check API availability." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage,
  };
}
