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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

type NutrientChartProps = {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
};

export function NutrientChart({
  nitrogen,
  phosphorus,
  potassium,
}: NutrientChartProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/90 shadow-xl backdrop-blur-xl">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        
        <div>
          <h4 className="text-lg font-bold text-green-950">
            Soil Nutrient Levels
          </h4>

          <p className="mt-1 text-xs text-slate-500">
            Real-time soil nutrient distribution analysis
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-700">
          📊
        </div>
      </div>

      {/* Chart */}
      <div className="p-5">
        <div className="h-64">
          <Bar
            data={{
              labels: [
                "Nitrogen",
                "Phosphorus",
                "Potassium",
              ],

              datasets: [
                {
                  label: "Soil Nutrients",

                  data: [
                    nitrogen,
                    phosphorus,
                    potassium,
                  ],

                  backgroundColor: [
                    "#16a34a",
                    "#f59e0b",
                    "#0ea5e9",
                  ],

                  borderRadius: 14,
                  borderSkipped: false,
                  barThickness: 45,
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
                x: {
                  grid: {
                    display: false,
                  },

                  ticks: {
                    color: "#475569",
                    font: {
                      size: 12,
                    },
                  },
                },

                y: {
                  beginAtZero: true,

                  grid: {
                    color: "#e2e8f0",
                  },

                  ticks: {
                    color: "#64748b",
                    font: {
                      size: 11,
                    },
                  },
                },
              },

              animation: {
                duration: 1200,
              },
            }}
          />
        </div>

        {/* Bottom Stats */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          
          <div className="rounded-2xl bg-green-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-500">
              Nitrogen
            </p>

            <h5 className="mt-1 text-lg font-bold text-green-700">
              {nitrogen}
            </h5>
          </div>

          <div className="rounded-2xl bg-orange-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-500">
              Phosphorus
            </p>

            <h5 className="mt-1 text-lg font-bold text-orange-600">
              {phosphorus}
            </h5>
          </div>

          <div className="rounded-2xl bg-sky-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-500">
              Potassium
            </p>

            <h5 className="mt-1 text-lg font-bold text-sky-600">
              {potassium}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}