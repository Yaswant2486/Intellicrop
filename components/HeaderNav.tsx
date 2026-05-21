"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderNavProps = {
  forceGradient?: boolean;
};

export function HeaderNav({
  forceGradient = false,
}: HeaderNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        forceGradient
          ? "bg-gradient-to-r from-green-950 via-green-800 to-emerald-700 shadow-xl"
          : scrolled
          ? "border-b border-white/10 bg-green-950/85 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 text-3xl shadow-lg transition-all duration-300 group-hover:scale-110">
            🌱
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-wide text-white">
              Intellicrop
            </h1>

            <p className="text-xs text-green-100">
              AI Smart Farming System
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {[
              ["Features", "/#features"],
              ["Dashboard", "/#dashboard"],
              ["AI Assistant", "/#chatbot"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="rounded-xl px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10"
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Weather */}
            <li>
              <Link
                href="/weather"
                className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                ☀️ Weather
              </Link>
            </li>

            {/* Smart Farming */}
            <li>
              <Link
                href="/smart-farming"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                🌾 Smart Farming
              </Link>
            </li>
          </ul>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md lg:hidden"
        >
          {mobileMenu ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileMenu
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 bg-green-950/95 px-4 py-5 backdrop-blur-xl">
          <div className="space-y-3">
            {[
              ["Features", "/#features"],
              ["Dashboard", "/#dashboard"],
              ["AI Assistant", "/#chatbot"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileMenu(false)}
                className="block rounded-2xl bg-white/5 px-5 py-4 text-white transition-all duration-300 hover:bg-white/10"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/weather"
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-400 px-5 py-4 font-semibold text-white shadow-lg"
            >
              ☀️ Weather Dashboard
            </Link>

            <Link
              href="/smart-farming"
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-4 font-semibold text-white shadow-lg"
            >
              🌾 Smart Farming
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}