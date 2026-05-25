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
  const {
    soilInput,
    analysis,
    updateInput,
    saveAnalysis,
    saving,
    saveMessage,
  } = useSoilAnalysis();

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
    await Promise.all([
      saveAnalysis(),
      fetchWeather(soilInput.location),
    ]);
  };

  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-100 py-16"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-green-200 bg-white px-4 py-1 text-sm shadow-sm">
            🌱 AI Powered Smart Farming
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-green-950">
            Agricultural Intelligence Dashboard
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            Analyze soil nutrients, predict crop suitability, monitor weather
            conditions, and receive AI-generated farming recommendations through
            an advanced agricultural intelligence system.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-5 lg:grid-cols-3">

          {/* LEFT SIDE */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/90 shadow-2xl backdrop-blur-xl">

              <div className="p-5">
                <SoilForm
                  soilInput={soilInput}
                  onChange={updateInput}
                  onAnalyze={handleAnalyze}
                  saving={saving}
                />
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5 lg:col-span-2">

            {/* TOP BAR */}
            <div className="flex flex-col gap-4 rounded-3xl border border-white/50 bg-white/90 p-5 shadow-xl backdrop-blur-xl md:flex-row md:items-center md:justify-between">

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-green-950">
                  Analysis Results
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Real-time AI-generated agricultural insights and environmental analytics.
                </p>
              </div>

              <div className="w-full md:w-auto">
                <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 p-[1px] shadow-lg">
                  <div className="rounded-2xl bg-white px-4 py-3">
                    <WeatherBadge
                      icon={weatherIcon}
                      text={weatherText}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
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
                  className="group overflow-hidden rounded-2xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`inline-flex rounded-lg bg-gradient-to-r ${item.color} px-2 py-1 text-xs font-semibold text-white`}
                  >
                    {item.title}
                  </div>

                  <h3 className="mt-3 text-3xl font-extrabold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.unit}
                  </p>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
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
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">

              {/* Nutrient Chart */}
              <div className="flex h-full flex-col rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-green-100">

                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-green-950">
                      Nutrient Analysis
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Soil nutrient distribution
                    </p>
                  </div>

                  <div className="rounded-lg bg-green-100 px-2 py-1 text-sm text-green-700">
                    📊
                  </div>
                </div>

                <div className="flex-1">
                  <NutrientChart
                    nitrogen={soilInput.nitrogen}
                    phosphorus={soilInput.phosphorus}
                    potassium={soilInput.potassium}
                  />
                </div>
              </div>

              {/* Crop Chart */}
              <div className="flex h-full flex-col rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-green-100">

                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-green-950">
                      Crop Suitability
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Crop prediction scores
                    </p>
                  </div>

                  <div className="rounded-lg bg-emerald-100 px-2 py-1 text-sm text-emerald-700">
                    🌾
                  </div>
                </div>

                <div className="flex-1">
                  <CropSuitabilityChart
                    cropScores={analysis.cropScores}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* RECOMMENDATIONS */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/90 shadow-2xl backdrop-blur-xl">

              {/* Header */}
              <div className="bg-gradient-to-r from-green-700 to-emerald-500 p-5 text-white">
                <h3 className="text-xl font-bold">
                  Smart Recommendations
                </h3>

                <p className="mt-1 text-sm text-green-100">
                  Personalized AI recommendations based on soil and weather analysis.
                </p>
              </div>

              {/* Content */}
              <div className="p-5">
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