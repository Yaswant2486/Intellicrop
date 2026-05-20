"use client";

import { useState } from "react";
import { getCropSuggestion, weatherEmojiMap } from "@/lib/analysisEngine";

export type WeatherSnapshot = {
  city: string;
  tempC: number;
  humidity: number;
  condition: string;
  icon: string;
  cropSuggestion: string;
};

export type ForecastItem = {
  date: string;
  tempC: number;
  condition: string;
  icon: string;
};

export function useWeather() {
  const [current, setCurrent] = useState<WeatherSnapshot | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city: string) => {
    const location = city.trim();
    if (!location) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const [currentRes, forecastRes] = await Promise.all([
        fetch(`/api/weather/current?city=${encodeURIComponent(location)}`),
        fetch(`/api/weather/forecast?city=${encodeURIComponent(location)}`),
      ]);

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      if (!currentRes.ok) {
        throw new Error(currentData?.error || "Failed to fetch current weather");
      }
      if (!forecastRes.ok) {
        throw new Error(forecastData?.error || "Failed to fetch weather forecast");
      }

      const condition = currentData.weather[0].main;
      const icon = weatherEmojiMap[condition] || "🌤️";
      const tempC = currentData.main.temp;
      const humidity = currentData.main.humidity;

      setCurrent({
        city: currentData.name,
        tempC,
        humidity,
        condition,
        icon,
        cropSuggestion: getCropSuggestion(tempC, humidity),
      });

      const dailyForecast = forecastData.list
        .filter((item: { dt_txt: string }) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5)
        .map((item: { dt_txt: string; weather: Array<{ main: string }>; main: { temp: number } }) => {
          const itemCondition = item.weather[0].main;
          return {
            date: new Date(item.dt_txt).toDateString(),
            tempC: item.main.temp,
            condition: itemCondition,
            icon: weatherEmojiMap[itemCondition] || "🌤️",
          };
        });

      setForecast(dailyForecast);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Weather request failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    current,
    forecast,
    loading,
    error,
    fetchWeather,
  };
}
