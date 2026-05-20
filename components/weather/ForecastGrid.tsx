import { ForecastItem } from "@/hooks/useWeather";

type ForecastGridProps = {
  forecast: ForecastItem[];
};

export function ForecastGrid({ forecast }: ForecastGridProps) {
  if (!forecast.length) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {forecast.map((item) => (
        <div key={`${item.date}-${item.condition}`} className="rounded-xl bg-white p-4 text-center shadow">
          <h4 className="text-2xl">{item.icon}</h4>
          <p className="mt-1 text-sm font-semibold text-slate-700">{item.date}</p>
          <p className="mt-1 text-lg font-bold text-green-700">{item.tempC.toFixed(1)}°C</p>
          <p className="text-sm text-slate-600">{item.condition}</p>
        </div>
      ))}
    </div>
  );
}
