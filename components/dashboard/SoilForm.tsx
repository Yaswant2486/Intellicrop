import { SoilInput } from "@/hooks/useSoilAnalysis";

type SoilFormProps = {
  soilInput: SoilInput;
  onChange: <K extends keyof SoilInput>(
    key: K,
    value: SoilInput[K]
  ) => void;
  onAnalyze: () => void;
  saving: boolean;
};

export function SoilForm({
  soilInput,
  onChange,
  onAnalyze,
  saving,
}: SoilFormProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/90 shadow-xl backdrop-blur-xl">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-500 px-5 py-4 text-white">
        <h3 className="text-lg font-bold">
          🌱 Farm Soil Analysis
        </h3>

        <p className="mt-1 text-sm text-green-100">
          Enter your farm details to get AI-powered recommendations.
        </p>
      </div>

      {/* Form Content */}
      <div className="space-y-5 p-5">
        
        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            📍 Location
          </label>

          <input
            type="text"
            value={soilInput.location}
            onChange={(e) => onChange("location", e.target.value)}
            placeholder="Enter your farm location"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />
        </div>

        {/* Sliders */}
        {(
          [
            [
              "nitrogen",
              "Nitrogen (N)",
              0,
              100,
              1,
              "🟦",
              "from-blue-500 to-cyan-400",
            ],

            [
              "phosphorus",
              "Phosphorus (P)",
              0,
              100,
              1,
              "🟧",
              "from-orange-500 to-yellow-400",
            ],

            [
              "potassium",
              "Potassium (K)",
              0,
              100,
              1,
              "🟪",
              "from-purple-500 to-pink-400",
            ],

            [
              "ph",
              "Soil pH Level",
              4,
              9,
              0.1,
              "🟩",
              "from-green-500 to-emerald-400",
            ],
          ] as const
        ).map(
          ([key, label, min, max, step, emoji, color]) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
            >
              
              {/* Top */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>{emoji}</span>

                  <span className="text-sm font-semibold text-slate-700">
                    {label}
                  </span>
                </div>

                <div
                  className={`rounded-xl bg-gradient-to-r ${color} px-3 py-1 text-sm font-bold text-white shadow-sm`}
                >
                  {soilInput[key]}
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={soilInput[key]}
                onChange={(e) =>
                  onChange(key, Number(e.target.value))
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-green-600"
              />

              {/* Min Max */}
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>{min}</span>
                <span>{max}</span>
              </div>
            </div>
          )
        )}

        {/* Button */}
        <button
          type="button"
          onClick={onAnalyze}
          disabled={saving}
          className="w-full rounded-2xl bg-gradient-to-r from-amber-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {saving
            ? "⏳ Generating Analysis..."
            : "🚀 Analyze & Generate"}
        </button>
      </div>
    </div>
  );
}