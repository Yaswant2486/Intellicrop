import { ChatAssistant } from "@/components/chat/ChatAssistant";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import { HeaderNav } from "@/components/HeaderNav";

export default function HomePage() {
  return (
    <>
      <HeaderNav />

      <section className="bg-gradient-to-br from-green-700 to-green-400 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            AI Driven Smart Farming and Advisory System
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-green-100">
            Intellicrop combines artificial intelligence with real-time environmental
            data to provide actionable insights for optimal crop selection and
            fertilization strategies.
          </p>
          <a
            href="#dashboard"
            className="mt-6 inline-block rounded-md bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600"
          >
            Get Started
          </a>
        </div>
      </section>

      <section id="features" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-green-900">
            How Intellicrop Works
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["🌤️", "Live Weather Data", "Real-time weather insights for planning."],
              ["🧠", "AI-Powered Analysis", "Generate crop and fertilizer recommendations."],
              ["📊", "Interactive Dashboard", "Visualize nutrient trends and suitability."],
              ["💬", "AI Chat Assistant", "Ask farming questions and get concise advice."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-lg bg-slate-50 p-5 shadow-sm">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-2 text-xl font-semibold text-green-900">{title}</h3>
                <p className="mt-1 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DashboardSection />

      <section id="chatbot" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-green-900">
            Ask Our AI Agricultural Assistant
          </h2>
          <ChatAssistant />
        </div>
      </section>

      <section className="bg-green-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-green-900">
            Simple Farming Tips
          </h2>
          <ul className="mx-auto max-w-3xl space-y-2 text-lg">
            <li>Water crops early in the morning.</li>
            <li>Use neem oil for pest control.</li>
            <li>Rotate crops every season.</li>
            <li>Avoid over irrigation.</li>
            <li>Check weather before applying fertilizer.</li>
          </ul>
        </div>
      </section>

      <footer className="bg-green-900 py-8 text-center text-sm text-green-100">
        © 2025 Intellicrop. All rights reserved.
      </footer>
    </>
  );
}
