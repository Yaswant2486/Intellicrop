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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type CropSuitabilityChartProps = {
  cropScores: CropScores;
};

export function CropSuitabilityChart({
  cropScores,
}: CropSuitabilityChartProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/90 shadow-xl backdrop-blur-xl">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        
        <div>
          <h4 className="text-lg font-bold text-green-950">
            Optimal Crop Suitability
          </h4>

          <p className="mt-1 text-xs text-slate-500">
            AI-generated crop prediction and compatibility analysis
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-xl text-emerald-700">
          🌾
        </div>
      </div>

      {/* Chart */}
      <div className="p-5">
        <div className="h-72">
          <Radar
            data={{
              labels: [
                "Rice",
                "Wheat",
                "Maize",
                "Soybean",
              ],

              datasets: [
                {
                  label: "Suitability Score",

                  data: [
                    cropScores.Rice,
                    cropScores.Wheat,
                    cropScores.Maize,
                    cropScores.Soybean,
                  ],

                  backgroundColor: "rgba(34,197,94,0.18)",

                  borderColor: "rgb(22,163,74)",

                  borderWidth: 3,

                  pointBackgroundColor: [
                    "#16a34a",
                    "#f59e0b",
                    "#0ea5e9",
                    "#8b5cf6",
                  ],

                  pointBorderColor: "#ffffff",

                  pointHoverBackgroundColor: "#ffffff",

                  pointHoverBorderColor: "#16a34a",

                  pointRadius: 5,

                  pointHoverRadius: 7,
                },
              ],
            }}

            options={{
              responsive: true,
              maintainAspectRatio: false,

              plugins: {
                legend: {
                  display: false,
                },

                tooltip: {
                  backgroundColor: "#111827",

                  padding: 12,

                  cornerRadius: 12,

                  titleColor: "#ffffff",

                  bodyColor: "#e5e7eb",
                },
              },

              scales: {
                r: {
                  beginAtZero: true,

                  suggestedMax: 100,

                  angleLines: {
                    color: "#dbe4ee",
                  },

                  grid: {
                    color: "#e2e8f0",
                  },

                  pointLabels: {
                    color: "#334155",

                    font: {
                      size: 13,
                    },
                  },

                  ticks: {
                    backdropColor: "transparent",

                    color: "#64748b",

                    stepSize: 20,

                    font: {
                      size: 10,
                    },
                  },
                },
              },

              animation: {
                duration: 1400,
              },
            }}
          />
        </div>

        {/* Bottom Stats */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

          <div className="rounded-2xl bg-green-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-500">
              Rice
            </p>

            <h5 className="mt-1 text-lg font-bold text-green-700">
              {cropScores.Rice}
            </h5>
          </div>

          <div className="rounded-2xl bg-amber-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-500">
              Wheat
            </p>

            <h5 className="mt-1 text-lg font-bold text-amber-600">
              {cropScores.Wheat}
            </h5>
          </div>

          <div className="rounded-2xl bg-sky-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-500">
              Maize
            </p>

            <h5 className="mt-1 text-lg font-bold text-sky-600">
              {cropScores.Maize}
            </h5>
          </div>

          <div className="rounded-2xl bg-purple-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-500">
              Soybean
            </p>

            <h5 className="mt-1 text-lg font-bold text-purple-600">
              {cropScores.Soybean}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}