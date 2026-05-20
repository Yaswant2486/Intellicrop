"use client";

import { FormEvent, useState } from "react";
import { useWeather } from "@/hooks/useWeather";
import { CurrentWeatherCard } from "./CurrentWeatherCard";
import { ForecastGrid } from "./ForecastGrid";

export function WeatherPageContent() {
  const [city, setCity] = useState("");
  const { current, forecast, loading, error, fetchWeather } = useWeather();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await fetchWeather(city);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-xl bg-gradient-to-b from-green-700 to-green-500 px-4 py-10 text-center text-white">
        <h2 className="text-3xl font-bold">Weather Forecast</h2>
        <p className="mt-2">Get accurate weather insights for smarter crop planning.</p>

        <form onSubmit={onSubmit} className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="flex-1 rounded-md border border-white/30 bg-white px-3 py-2 text-slate-900"
          />
          <button
            type="submit"
            className="rounded-md bg-amber-400 px-5 py-2 font-semibold text-slate-900 hover:bg-amber-300"
          >
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </form>
        {error ? <p className="mt-3 text-sm text-rose-200">{error}</p> : null}
      </section>

      <section className="mt-8">
        <CurrentWeatherCard current={current} />
        <h3 className="mt-8 mb-3 text-center text-2xl font-bold text-green-900">5-Day Forecast</h3>
        <ForecastGrid forecast={forecast} />
      </section>
    </div>
  );
}
