import { SoilInput } from "@/hooks/useSoilAnalysis";

type SoilFormProps = {
  soilInput: SoilInput;
  onChange: <K extends keyof SoilInput>(key: K, value: SoilInput[K]) => void;
  onAnalyze: () => void;
  saving: boolean;
};

export function SoilForm({ soilInput, onChange, onAnalyze, saving }: SoilFormProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h3 className="mb-4 text-xl font-semibold text-green-900">Enter Your Farm Details</h3>

      <label className="mb-3 block text-sm font-medium text-slate-700">
        Location
        <input
          type="text"
          value={soilInput.location}
          onChange={(e) => onChange("location", e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </label>

      {(
        [
          ["nitrogen", "Nitrogen (N) Level", 0, 100, 1],
          ["phosphorus", "Phosphorus (P) Level", 0, 100, 1],
          ["potassium", "Potassium (K) Level", 0, 100, 1],
          ["ph", "Soil pH Level", 4, 9, 0.1],
        ] as const
      ).map(([key, label, min, max, step]) => (
        <label key={key} className="mb-4 block text-sm font-medium text-slate-700">
          <div className="mb-1">{label}</div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={soilInput[key]}
              onChange={(e) => onChange(key, Number(e.target.value))}
              className="w-full"
            />
            <span className="w-12 text-right font-semibold text-green-800">
              {soilInput[key]}
            </span>
          </div>
        </label>
      ))}

      <button
        type="button"
        onClick={onAnalyze}
        disabled={saving}
        className="w-full rounded-md bg-amber-500 px-4 py-2 font-semibold text-white hover:bg-amber-600 disabled:opacity-70"
      >
        {saving ? "Saving Analysis..." : "Analyze Soil & Generate Recommendations"}
      </button>
    </div>
  );
}
