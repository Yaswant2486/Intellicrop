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

  const weatherIcon = current ? weatherEmojiMap[current.condition] || "🌤️" : "☀️";

  const handleAnalyze = async () => {
    await Promise.all([saveAnalysis(), fetchWeather(soilInput.location)]);
  };

  return (
    <section id="dashboard" className="bg-green-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-green-900">
          Agricultural Intelligence Dashboard
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <SoilForm
              soilInput={soilInput}
              onChange={updateInput}
              onAnalyze={handleAnalyze}
              saving={saving}
            />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow">
              <h3 className="text-xl font-semibold text-green-900">Analysis Results</h3>
              <WeatherBadge icon={weatherIcon} text={weatherText} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <NutrientChart
                nitrogen={soilInput.nitrogen}
                phosphorus={soilInput.phosphorus}
                potassium={soilInput.potassium}
              />
              <CropSuitabilityChart cropScores={analysis.cropScores} />
            </div>

            <div className="rounded-lg bg-white p-5 shadow">
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
    </section>
  );
}
