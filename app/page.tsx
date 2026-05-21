"use client";

import { useEffect, useState } from "react";
import { ChatAssistant } from "@/components/chat/ChatAssistant";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import { HeaderNav } from "@/components/HeaderNav";
import { Footer } from "@/components/footer";
import Link from "next/link";

const heroImages = [
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1920&auto=format&fit=crop",
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeaderNav />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                currentImage === index
                  ? "scale-100 opacity-100"
                  : "scale-110 opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

        {/* Animated Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-transparent to-green-500/30" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-5xl px-4 text-center text-white">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
              🌱 Smart Agriculture Powered by AI
            </div>

            <h1 className="animate-fadeIn text-5xl font-extrabold leading-tight md:text-7xl">
              AI Driven Smart Farming
              <span className="block bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                and Advisory System
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-green-100 md:text-xl">
              Intellicrop combines artificial intelligence with real-time
              environmental data to provide actionable insights for optimal crop
              selection, irrigation planning, and fertilization strategies.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#dashboard"
                className="rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-amber-600"
              >
                Explore Dashboard
              </a>

              <a
                href="#features"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Learn More
              </a>
            </div>

            {/* Dots Indicator */}
            <div className="mt-10 flex justify-center gap-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-10 bg-amber-400"
                      : "bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Blur Effect */}
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-4xl font-bold text-green-900">
            How Intellicrop Works
          </h2>

          <section id="features" className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-4">
    {/* Heading */}
    <div className="mb-16 text-center">
      <h2 className="text-5xl font-extrabold text-green-900">
        How Intellicrop Works
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
        Intellicrop uses AI technology, environmental monitoring, and smart
        analytics to help farmers improve productivity, reduce waste, and make
        data-driven farming decisions.
      </p>
    </div>

    {/* Vertical Large Cards */}
    <div className="space-y-8">
      {[
        {
          icon: "🌤️",
          title: "Live Weather Data",
          text: "Get real-time weather forecasting and environmental updates to plan irrigation, fertilizer application, and harvesting efficiently.",
          features: [
            "Real-time temperature tracking",
            "Rainfall prediction system",
            "Humidity and wind monitoring",
            "Smart farming weather alerts",
          ],
        },

        {
          icon: "🧠",
          title: "AI-Powered Analysis",
          text: "Our AI engine analyzes soil nutrients, crop conditions, and environmental data to recommend the best crops and fertilizers for higher yield.",
          features: [
            "AI crop recommendations",
            "Fertilizer prediction",
            "Soil nutrient analysis",
            "Yield optimization insights",
          ],
        },

        {
          icon: "📊",
          title: "Interactive Dashboard",
          text: "Visualize farming data with advanced charts and analytics for soil health, nutrient trends, environmental monitoring, and crop suitability.",
          features: [
            "Modern analytics dashboard",
            "NPK visualization charts",
            "Historical farming records",
            "Real-time monitoring system",
          ],
        },

        {
          icon: "💬",
          title: "AI Chat Assistant",
          text: "Get instant agricultural support from our intelligent AI assistant for farming guidance, disease prevention, irrigation, and cultivation techniques.",
          features: [
            "24/7 farming assistance",
            "Crop disease guidance",
            "Instant smart responses",
            "Modern agriculture tips",
          ],
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Side */}
            <div className="flex items-center justify-center bg-gradient-to-br from-green-700 to-green-500 p-10 lg:w-72">
              <div className="text-center text-white">
                <div className="text-7xl transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-3xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 p-8 lg:p-10">
              <p className="text-lg leading-relaxed text-slate-600">
                {item.text}
              </p>

              {/* Feature Points */}
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {item.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl bg-green-50 px-5 py-4 text-slate-700 transition-all duration-300 hover:bg-green-100"
                  >
                    <span className="text-lg text-green-600">✔</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="mt-8 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-800 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        </div>
      </section>

      {/* DASHBOARD */}
      <DashboardSection />

      {/* CHATBOT */}
      <section id="chatbot" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-green-900">
            Ask Our AI Agricultural Assistant
          </h2>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl">
            <ChatAssistant />
          </div>
        </div>
      </section>

      {/* TIPS */}
<section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-100 py-24">
  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />

    <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-emerald-300/20 blur-3xl" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4">
    {/* Heading */}
    <div className="mb-16 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 shadow-sm">
        🌱 Smart Agriculture Tips
      </div>

      <h2 className="mt-6 text-5xl font-extrabold text-green-950">
        Essential Farming Tips
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
        Improve crop productivity, reduce soil damage, and enhance farming
        efficiency with these smart agricultural practices powered by
        sustainable farming techniques.
      </p>
    </div>

    {/* Tips Cards */}
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          icon: "🌅",
          title: "Morning Irrigation",
          text: "Water crops early in the morning to minimize evaporation and improve water absorption efficiency.",
          color: "from-blue-500 to-cyan-400",
        },

        {
          icon: "🪴",
          title: "Natural Pest Control",
          text: "Use neem oil and organic pesticides to control harmful insects while protecting soil health.",
          color: "from-green-600 to-emerald-400",
        },

        {
          icon: "🌾",
          title: "Crop Rotation",
          text: "Rotate crops every season to maintain soil fertility and reduce pest infestation naturally.",
          color: "from-yellow-500 to-orange-400",
        },

        {
          icon: "💧",
          title: "Avoid Over Irrigation",
          text: "Excessive watering damages roots and decreases oxygen supply to crops, affecting growth.",
          color: "from-sky-500 to-blue-400",
        },

        {
          icon: "🌦️",
          title: "Weather-Based Fertilization",
          text: "Always check weather forecasts before fertilizer application to prevent nutrient loss due to rainfall.",
          color: "from-purple-500 to-pink-400",
        },

        {
          icon: "🌱",
          title: "Soil Health Monitoring",
          text: "Regularly test soil nutrients and pH levels to ensure balanced crop nutrition and higher yield.",
          color: "from-lime-500 to-green-400",
        },
      ].map((tip, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
        >
          {/* Glow Effect */}
          <div
            className={`absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br ${tip.color} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-150`}
          />

          {/* Icon */}
          <div
            className={`inline-flex rounded-3xl bg-gradient-to-r ${tip.color} p-5 text-5xl text-white shadow-lg`}
          >
            {tip.icon}
          </div>

          {/* Content */}
          <h3 className="mt-6 text-2xl font-bold text-green-950">
            {tip.title}
          </h3>

          <p className="mt-4 leading-relaxed text-slate-600">
            {tip.text}
          </p>

          {/* Bottom Line */}
          <div
            className={`mt-8 h-1 w-24 rounded-full bg-gradient-to-r ${tip.color} transition-all duration-500 group-hover:w-full`}
          />
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-20 text-center">
      <div className="inline-block rounded-[32px] border border-white/30 bg-white/70 px-10 py-8 shadow-2xl backdrop-blur-xl">
        <h3 className="text-3xl font-bold text-green-950">
          Ready to Modernize Your Farming?
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Use Intellicrop AI to make smarter agricultural decisions with
          weather analytics, crop prediction, and intelligent farming guidance.
        </p>

        <Link href="/smart-farming">
          <button className="mt-8 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            🚀 Explore Smart Farming
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}