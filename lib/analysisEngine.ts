export type CropScores = {
  Rice: number;
  Wheat: number;
  Maize: number;
  Soybean: number;
};

export type AnalysisResult = {
  crops: string[];
  fertilizer: string;
  plantingSchedule: string;
  cropScores: CropScores;
};

export function getAnalysisResult(
  nitrogen: number,
  phosphorus: number,
  potassium: number,
  ph: number
): AnalysisResult {
  const cropScores: CropScores = {
    Rice: 0,
    Wheat: 0,
    Maize: 0,
    Soybean: 0,
  };

  if (nitrogen >= 60) {
    cropScores.Rice += 30;
    cropScores.Maize += 25;
  } else {
    cropScores.Wheat += 25;
    cropScores.Soybean += 20;
  }

  if (phosphorus >= 50) {
    cropScores.Soybean += 30;
    cropScores.Wheat += 20;
  } else {
    cropScores.Rice += 20;
    cropScores.Maize += 15;
  }

  if (potassium >= 50) {
    cropScores.Maize += 25;
    cropScores.Wheat += 20;
  } else {
    cropScores.Rice += 15;
    cropScores.Soybean += 10;
  }

  if (ph >= 6 && ph <= 7.5) {
    cropScores.Wheat += 20;
    cropScores.Maize += 20;
  } else if (ph < 6) {
    cropScores.Rice += 20;
  } else {
    cropScores.Soybean += 15;
  }

  const topCrops = Object.entries(cropScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([crop]) => crop);

  let fertilizer = "Balanced NPK fertilizer (10-10-10) is recommended.";
  if (phosphorus < 35) {
    fertilizer = "Phosphorus is low. Use high-phosphorus fertilizer such as 10-20-10.";
  } else if (nitrogen < 40) {
    fertilizer = "Nitrogen is low. Use nitrogen-rich fertilizer such as urea or 20-10-10.";
  } else if (potassium < 40) {
    fertilizer = "Potassium is low. Use potash-rich fertilizer such as 10-10-20.";
  }

  let plantingSchedule = "Optimal planting window: Late April to early May.";
  if (ph < 5.8) {
    plantingSchedule = "Apply lime and prepare soil now; start planting in 2-3 weeks.";
  } else if (ph > 7.8) {
    plantingSchedule = "Add organic matter and begin planting in early monsoon window.";
  }

  return {
    crops: topCrops,
    fertilizer,
    plantingSchedule,
    cropScores,
  };
}

export function getCropSuggestion(temp: number, humidity: number): string {
  if (temp >= 28 && humidity >= 60) {
    return "Best crops: Rice, Sugarcane, Jute";
  }
  if (temp >= 20 && temp < 28) {
    return "Best crops: Maize, Banana, Papaya, Vegetables";
  }
  if (temp >= 15 && temp < 20) {
    return "Best crops: Potato, Barley, Wheat";
  }
  if (temp < 15) {
    return "Best crops: Apples, Oranges, Tea";
  }
  return "Suitable conditions for general crops.";
}

export const weatherEmojiMap: Record<string, string> = {
  Thunderstorm: "⛈️",
  Drizzle: "🌦️",
  Rain: "🌧️",
  Snow: "❄️",
  Clear: "☀️",
  Clouds: "☁️",
  Mist: "🌫️",
  Fog: "🌁",
  Haze: "🌤️",
};
