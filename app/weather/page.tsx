"use client";

import { HeaderNav } from "@/components/HeaderNav";
import { WeatherPageContent } from "@/components/weather/WeatherPageContent";
import { Footer } from "@/components/footer";

export default function WeatherPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-green-950 via-green-900 to-emerald-950">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-300/10 blur-3xl" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Navbar */}
      <HeaderNav />

      {/* Hero Section */}
      <section className="relative pt-36">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-green-100 backdrop-blur-md">
              🌦️ Real-Time Climate Intelligence
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Smart Weather
              <span className="block bg-gradient-to-r from-green-300 via-emerald-200 to-lime-300 bg-clip-text text-transparent">
                Forecast Dashboard
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-green-100/80 md:text-xl">
              Monitor live weather conditions, rainfall probability,
              temperature, humidity, and environmental insights to improve
              agricultural planning and crop productivity.
            </p>

            {/* Mini Stats */}
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: "🌡️",
                  title: "Temperature",
                  text: "Real-time temperature monitoring",
                },

                {
                  icon: "🌧️",
                  title: "Rain Forecast",
                  text: "Predict rainfall and irrigation planning",
                },

                {
                  icon: "💨",
                  title: "Wind & Humidity",
                  text: "Environmental condition tracking",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
                >
                  <div className="text-5xl">{item.icon}</div>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-green-100/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weather Content */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-2xl">
            {/* Top Bar */}
            <div className="flex flex-col gap-4 border-b border-white/10 bg-gradient-to-r from-green-700/70 to-emerald-600/70 px-8 py-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Live Weather Analytics
                </h2>

                <p className="mt-2 text-green-100/80">
                  AI-enhanced weather monitoring system for precision farming.
                </p>
              </div>

              {/* Live Badge */}
              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
                <span className="h-3 w-3 animate-pulse rounded-full bg-green-300" />

                <span className="font-semibold">
                  Live Data Streaming
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-4 md:p-8">
              <WeatherPageContent />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}