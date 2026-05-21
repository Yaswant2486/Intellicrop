"use client";

import { useMemo } from "react";
import { useSoilAnalysis } from "@/hooks/useSoilAnalysis";
import { useWeather } from "@/hooks/useWeather";
import { weatherEmojiMap } from "@/lib/analysisEngine";
import { CropSuitabilityChart } from "./CropSuitabilityChart";
import { NutrientChart } from "./NutrientChart";
import { RecommendationCards } from "./RecommendationCards";
import { SoilForm } from "./SoilForm";
import { WeatherBadge } from "./WeatherBadge";

export function DashboardSection() {
  const { soilInput, analysis, updateInput, saveAnalysis, saving, saveMessage } =
    useSoilAnalysis();

  const { current, fetchWeather } = useWeather();

  const weatherText = useMemo(() => {
    if (!current) return "Sunny, 78°F";

    const tempF = Math.round((current.tempC * 9) / 5 + 32);

    return `${current.condition}, ${tempF}°F`;
  }, [current]);

  const weatherIcon = current
    ? weatherEmojiMap[current.condition] || "🌤️"
    : "☀️";

  const handleAnalyze = async () => {
    await Promise.all([saveAnalysis(), fetchWeather(soilInput.location)]);
  };

  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-100 py-24"
    >
      {/* Background Blur Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-green-200 bg-white px-5 py-2 shadow-sm">
            🌱 AI Powered Smart Farming
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-green-950">
            Agricultural Intelligence Dashboard
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Analyze soil nutrients, predict crop suitability, monitor weather
            conditions, and receive AI-generated farming recommendations through
            an advanced agricultural intelligence system.
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT PANEL */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-2xl backdrop-blur-xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-700 to-green-500 p-6 text-white">
                <h3 className="text-2xl font-bold">
                  Soil Analysis Input
                </h3>

                <p className="mt-2 text-green-100">
                  Enter your soil and environmental data to generate intelligent
                  farming recommendations.
                </p>
              </div>

              {/* Form */}
              <div className="p-6">
                <SoilForm
                  soilInput={soilInput}
                  onChange={updateInput}
                  onAnalyze={handleAnalyze}
                  saving={saving}
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-8 lg:col-span-8">
            {/* TOP STATUS BAR */}
            <div className="flex flex-col gap-5 rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur-xl md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-3xl font-bold text-green-950">
                  Analysis Results
                </h3>

                <p className="mt-2 text-slate-600">
                  Real-time AI-generated agricultural insights and environmental
                  analytics.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 p-1 shadow-lg">
                <div className="rounded-2xl bg-white px-5 py-3">
                  <WeatherBadge
                    icon={weatherIcon}
                    text={weatherText}
                  />
                </div>
              </div>
            </div>

            {/* STATS CARDS */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Nitrogen",
                  value: soilInput.nitrogen,
                  color: "from-blue-500 to-cyan-400",
                  unit: "mg/kg",
                },

                {
                  title: "Phosphorus",
                  value: soilInput.phosphorus,
                  color: "from-orange-500 to-yellow-400",
                  unit: "mg/kg",
                },

                {
                  title: "Potassium",
                  value: soilInput.potassium,
                  color: "from-purple-500 to-pink-400",
                  unit: "mg/kg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} px-4 py-2 text-sm font-semibold text-white`}
                  >
                    {item.title}
                  </div>

                  <h3 className="mt-5 text-5xl font-extrabold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-slate-500">{item.unit}</p>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      style={{
                        width: `${Math.min(item.value, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CHARTS */}
            <div className="grid gap-8 xl:grid-cols-2">
              {/* Nutrient Chart */}
              <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-green-100">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-green-950">
                      Nutrient Analysis
                    </h3>

                    <p className="mt-1 text-slate-500">
                      Soil nutrient distribution and balance
                    </p>
                  </div>

                  <div className="rounded-xl bg-green-100 px-4 py-2 text-green-700">
                    📊
                  </div>
                </div>

                <NutrientChart
                  nitrogen={soilInput.nitrogen}
                  phosphorus={soilInput.phosphorus}
                  potassium={soilInput.potassium}
                />
              </div>

              {/* Crop Chart */}
              <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-green-100">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-green-950">
                      Crop Suitability
                    </h3>

                    <p className="mt-1 text-slate-500">
                      AI-generated crop prediction scores
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-100 px-4 py-2 text-emerald-700">
                    🌾
                  </div>
                </div>

                <CropSuitabilityChart
                  cropScores={analysis.cropScores}
                />
              </div>
            </div>

            {/* RECOMMENDATIONS */}
            <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/80 shadow-2xl backdrop-blur-xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-700 to-emerald-500 p-6 text-white">
                <h3 className="text-3xl font-bold">
                  Smart Recommendations
                </h3>

                <p className="mt-2 text-green-100">
                  Personalized AI recommendations based on soil and weather
                  analysis.
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <RecommendationCards
                  location={soilInput.location}
                  crops={analysis.crops}
                  fertilizer={analysis.fertilizer}
                  plantingSchedule={analysis.plantingSchedule}
                  saveMessage={saveMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}