import { WeatherSnapshot } from "@/hooks/useWeather";

type CurrentWeatherCardProps = {
  current: WeatherSnapshot | null;
};

export function CurrentWeatherCard({ current }: CurrentWeatherCardProps) {
  if (!current) {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow">
        Search a city to view live weather insights.
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 text-center shadow">
      <h2 className="text-2xl font-bold text-green-900">
        {current.icon} {current.city}
      </h2>
      <p className="mt-2 text-4xl font-bold text-green-700">{current.tempC.toFixed(1)}°C</p>
      <p className="mt-1 text-slate-700">{current.condition}</p>
      <p className="mt-1 text-slate-700">Humidity: {current.humidity}%</p>
      <p className="mt-3 rounded-md bg-lime-100 p-2 font-medium text-lime-900">
        {current.cropSuggestion}
      </p>
    </div>
  );
}
