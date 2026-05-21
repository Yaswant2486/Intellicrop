"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer  () {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-green-950 to-black py-16">
  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4">
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 text-3xl shadow-lg">
            🌱
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Intellicrop
            </h2>

            <p className="text-sm text-green-200">
              AI Smart Farming Platform
            </p>
          </div>
        </div>

        <p className="mt-6 leading-relaxed text-green-100/70">
          Revolutionizing agriculture with Artificial Intelligence, smart
          weather analytics, crop recommendations, and intelligent farming
          assistance.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-bold text-white">
          Quick Links
        </h3>

        <ul className="mt-6 space-y-4 text-green-100/70">
          {[
            "Home",
            "Features",
            "Dashboard",
            "AI Assistant",
            "Weather Analytics",
          ].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer transition-all duration-300 hover:text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-xl font-bold text-white">
          Platform Features
        </h3>

        <ul className="mt-6 space-y-4 text-green-100/70">
          {[
            "AI Crop Prediction",
            "Weather Forecasting",
            "Soil Analysis",
            "Fertilizer Recommendation",
            "Smart Farming Assistant",
          ].map((item, index) => (
            <li
              key={index}
              className="transition-all duration-300 hover:text-white"
            >
              🌾 {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-bold text-white">
          Connect With Us
        </h3>

        <div className="mt-6 space-y-4 text-green-100/70">
          <p>📍 Smart Agriculture Innovation</p>

          <p>📧 support@intellicrop.ai</p>

          <p>📞 +91 98765 43210</p>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex gap-4">
          {["🌐", "📘", "📸", "🐦"].map((icon, index) => (
            <button
              key={index}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-14 border-t border-white/10 pt-8 text-center">
      <p className="text-sm text-green-100/60">
        © 2026 Intellicrop. All Rights Reserved. Powered by AI & Smart
        Agriculture Technology.
      </p>
    </div>
  </div>
</footer>
  );
}