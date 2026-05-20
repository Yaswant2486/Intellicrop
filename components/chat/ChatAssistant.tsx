"use client";

import { FormEvent, useMemo, useState } from "react";
import { useChat } from "@/hooks/useChat";

declare global {
  interface Window {
    webkitSpeechRecognition?: new () => SpeechRecognition;
  }
}

type SpeechRecognition = {
  lang: string;
  start: () => void;
  onresult: ((event: { results: Array<Array<{ transcript: string }>> }) => void) | null;
};

export function ChatAssistant() {
  const { messages, loading, sendMessage } = useChat();
  const [input, setInput] = useState("");
  const lastBotMessage = useMemo(
    () => [...messages].reverse().find((msg) => msg.role === "bot")?.text ?? "",
    [messages]
  );

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const message = input.trim();
    if (!message) return;
    setInput("");
    await sendMessage(message);
  };

  const handleReadLast = () => {
    if (!lastBotMessage) return;
    const speech = new SpeechSynthesisUtterance(lastBotMessage);
    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find((voice) => voice.lang === "hi-IN");
    if (hindiVoice) speech.voice = hindiVoice;
    speech.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const handleVoiceInput = () => {
    const Recognition = window.webkitSpeechRecognition;
    if (!Recognition) return;
    const recognition = new Recognition();
    recognition.lang = "hi-IN";
    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow">
      <div className="bg-green-700 px-4 py-3 text-center text-lg font-semibold text-white">
        Intellicrop AI Assistant
      </div>
      <div className="h-80 space-y-3 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
              message.role === "user"
                ? "ml-auto bg-green-500 text-white"
                : "bg-slate-100 text-slate-800"
            }`}
          >
            {message.text}
          </div>
        ))}
        {loading ? <p className="text-sm text-slate-500">Thinking...</p> : null}
      </div>
      <form onSubmit={onSubmit} className="flex flex-wrap gap-2 border-t border-slate-200 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about farming..."
          className="min-w-[220px] flex-1 rounded-md border border-slate-300 px-3 py-2"
        />
        <button
          type="submit"
          className="rounded-md bg-amber-500 px-4 py-2 font-semibold text-white hover:bg-amber-600"
        >
          Send
        </button>
        <button
          type="button"
          onClick={handleVoiceInput}
          className="rounded-md bg-green-700 px-4 py-2 font-semibold text-white hover:bg-green-800"
        >
          Speak
        </button>
        <button
          type="button"
          onClick={handleReadLast}
          className="rounded-md bg-sky-600 px-4 py-2 font-semibold text-white hover:bg-sky-700"
        >
          Read
        </button>
      </form>
    </div>
  );
}
