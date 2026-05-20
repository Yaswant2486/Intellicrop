type RecommendationCardsProps = {
  location: string;
  crops: string[];
  fertilizer: string;
  plantingSchedule: string;
  saveMessage: string;
};

export function RecommendationCards({
  location,
  crops,
  fertilizer,
  plantingSchedule,
  saveMessage,
}: RecommendationCardsProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-green-900">AI Recommendations</h3>

      <div className="rounded-r-lg border-l-4 border-green-700 bg-green-50 p-4">
        <h4 className="font-semibold">Recommended Crops</h4>
        <p>Recommended Crops ({location || "selected region"}): {crops.join(", ")}</p>
      </div>

      <div className="rounded-r-lg border-l-4 border-green-700 bg-green-50 p-4">
        <h4 className="font-semibold">Fertilizer Suggestions</h4>
        <p>{fertilizer}</p>
      </div>

      <div className="rounded-r-lg border-l-4 border-green-700 bg-green-50 p-4">
        <h4 className="font-semibold">Planting Schedule</h4>
        <p>{plantingSchedule}</p>
      </div>

      {saveMessage ? (
        <p className="text-sm font-medium text-slate-700">{saveMessage}</p>
      ) : null}
    </div>
  );
}
