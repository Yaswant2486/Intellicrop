"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@/hooks/useChat";

declare global {
  interface Window {
    webkitSpeechRecognition?: new () => SpeechRecognition;
  }
}

type SpeechRecognition = {
  lang: string;
  start: () => void;
  stop: () => void;
  onresult:
    | ((event: { results: Array<Array<{ transcript: string }>> }) => void)
    | null;
};

export function ChatAssistant() {
  const { messages, loading, sendMessage } = useChat();

  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const lastBotMessage = useMemo(
    () =>
      [...messages].reverse().find((msg) => msg.role === "bot")?.text ?? "",
    [messages]
  );

  // Auto Scroll - scroll within chat container only
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const message = input.trim();

    if (!message) return;

    setInput("");

    await sendMessage(message);
  };

  // Text to Speech
  const handleReadLast = () => {
    if (!lastBotMessage) return;

    const speech = new SpeechSynthesisUtterance(lastBotMessage);

    const voices = window.speechSynthesis.getVoices();

    const hindiVoice = voices.find(
      (voice) => voice.lang === "hi-IN"
    );

    if (hindiVoice) speech.voice = hindiVoice;

    speech.rate = 0.9;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);
  };

  // Voice Input
  const handleVoiceInput = () => {
    const Recognition = window.webkitSpeechRecognition;

    if (!Recognition) {
      alert("Voice recognition is not supported in your browser.");
      return;
    }

    const recognition = new Recognition();

    recognition.lang = "hi-IN";

    setIsListening(true);

    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/30 bg-white/85 shadow-xl backdrop-blur-xl">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-green-300/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />

      {/* HEADER */}
      <div className="relative border-b border-white/20 bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 px-5 py-4 text-white">
        
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
              🤖 AI Powered Assistant
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              Intellicrop AI Assistant
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-green-100">
              Ask farming questions, crop recommendations, irrigation guidance,
              fertilizer suggestions, and weather-based farming advice.
            </p>
          </div>

          {/* Status Card */}
          <div className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md lg:w-auto">
            <p className="text-xs text-green-100">
              Assistant Status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-300" />

              <span className="text-sm font-semibold">
                Online & Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="relative h-[430px] overflow-y-auto bg-gradient-to-b from-green-50/30 to-white p-4 md:p-5">
        
        <div className="space-y-4">
          
          {/* Empty State */}
          {messages.length === 0 && (
            <div className="rounded-3xl border border-dashed border-green-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-md">
              
              <div className="text-5xl">🌾</div>

              <h3 className="mt-4 text-2xl font-bold text-green-900">
                Welcome to Intellicrop Assistant
              </h3>

              <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
                Ask questions like:
              </p>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  "Which crop is best for black soil?",
                  "How much nitrogen fertilizer should I use?",
                  "Best irrigation methods for wheat farming?",
                  "How to prevent crop diseases naturally?",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-green-50 px-4 py-3 text-left text-sm text-slate-700 transition-all duration-300 hover:bg-green-100"
                  >
                    💬 {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[82%] rounded-[24px] px-4 py-3 shadow-md transition-all duration-300 ${
                  message.role === "user"
                    ? "rounded-br-md bg-gradient-to-r from-green-600 to-emerald-500 text-white"
                    : "rounded-bl-md border border-slate-100 bg-white text-slate-800"
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-base">
                    {message.role === "user" ? "🧑" : "🤖"}
                  </span>

                  <span className="text-xs font-semibold opacity-80">
                    {message.role === "user"
                      ? "You"
                      : "Intellicrop AI"}
                  </span>
                </div>

                <p className="text-sm leading-relaxed">
                  {message.text}
                </p>
              </div>
            </div>
          ))}

          {/* Loading */}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-3xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-md">
                
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-green-500" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-green-500 delay-100" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-green-500 delay-200" />
                  </div>

                  <span className="text-sm text-slate-500">
                    AI is thinking...
                  </span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* INPUT SECTION */}
      <form
        onSubmit={onSubmit}
        className="relative border-t border-white/20 bg-white/85 p-4 backdrop-blur-xl"
      >
        <div className="flex flex-col gap-3 lg:flex-row">
          
          {/* Input */}
          <div className="relative flex-1">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about smart farming..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100"
            />

            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              🌱
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            
            {/* Send */}
            <button
              type="submit"
              className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              🚀 Send
            </button>

            {/* Voice */}
            <button
              type="button"
              onClick={handleVoiceInput}
              className={`rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 ${
                isListening
                  ? "animate-pulse bg-red-500"
                  : "bg-gradient-to-r from-green-700 to-green-500"
              }`}
            >
              {isListening ? "🎙️ Listening..." : "🎤 Speak"}
            </button>

            {/* Read */}
            <button
              type="button"
              onClick={handleReadLast}
              className="rounded-2xl bg-gradient-to-r from-sky-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              🔊 Read
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}