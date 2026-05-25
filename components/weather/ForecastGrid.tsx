import { ForecastItem } from "@/hooks/useWeather";

type ForecastGridProps = {
  forecast: ForecastItem[];
};

export function ForecastGrid({ forecast }: ForecastGridProps) {
  if (!forecast.length) return null;

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
      {forecast.map((item) => (
        <div key={`${item.date}-${item.condition}`} className="rounded-xl bg-white p-2 text-center shadow">
          <h4 className="text-lg">{item.icon}</h4>
          <p className="mt-1 text-xs font-semibold text-slate-700">{item.date}</p>
          <p className="mt-1 text-base font-bold text-green-700">{item.tempC.toFixed(1)}°C</p>
          <p className="text-xs text-slate-600">{item.condition}</p>
        </div>
      ))}
    </div>
  );
}
