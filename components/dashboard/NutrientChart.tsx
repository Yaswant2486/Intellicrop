"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type NutrientChartProps = {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
};

export function NutrientChart({ nitrogen, phosphorus, potassium }: NutrientChartProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h4 className="mb-3 text-lg font-semibold text-green-900">Soil Nutrient Levels</h4>
      <div className="h-60">
        <Bar
          data={{
            labels: ["Nitrogen", "Phosphorus", "Potassium"],
            datasets: [
              {
                label: "Soil Nutrients",
                data: [nitrogen, phosphorus, potassium],
                backgroundColor: ["#16a34a", "#f59e0b", "#0ea5e9"],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
}
