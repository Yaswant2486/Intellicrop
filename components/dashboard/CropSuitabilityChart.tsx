"use client";

import {
  Chart as ChartJS,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { CropScores } from "@/lib/analysisEngine";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type CropSuitabilityChartProps = {
  cropScores: CropScores;
};

export function CropSuitabilityChart({ cropScores }: CropSuitabilityChartProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h4 className="mb-3 text-lg font-semibold text-green-900">Optimal Crop Suitability</h4>
      <div className="h-60">
        <Radar
          data={{
            labels: ["Rice", "Wheat", "Maize", "Soybean"],
            datasets: [
              {
                label: "Suitability Score",
                data: [
                  cropScores.Rice,
                  cropScores.Wheat,
                  cropScores.Maize,
                  cropScores.Soybean,
                ],
                backgroundColor: "rgba(34,197,94,0.2)",
                borderColor: "rgb(22,163,74)",
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                beginAtZero: true,
                suggestedMax: 100,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
