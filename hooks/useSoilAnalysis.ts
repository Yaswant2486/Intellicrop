"use client";

import { useState } from "react";
import { getAnalysisResult } from "@/lib/analysisEngine";

export type SoilInput = {
  location: string;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;
};

export function useSoilAnalysis() {
  const [soilInput, setSoilInput] = useState<SoilInput>({
    location: "Central Valley, CA",
    nitrogen: 65,
    phosphorus: 42,
    potassium: 78,
    ph: 6.8,
  });
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const analysis = getAnalysisResult(
    soilInput.nitrogen,
    soilInput.phosphorus,
    soilInput.potassium,
    soilInput.ph
  );

  const updateInput = <K extends keyof SoilInput>(key: K, value: SoilInput[K]) => {
    setSoilInput((prev) => ({ ...prev, [key]: value }));
  };

  const saveAnalysis = async () => {
    setSaving(true);
    setSaveMessage("");

    try {
      const response = await fetch("/api/soil-analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location: soilInput.location,
          nitrogen: soilInput.nitrogen,
          phosphorus: soilInput.phosphorus,
          potassium: soilInput.potassium,
          ph: soilInput.ph,
          crops: analysis.crops,
          fertilizer: analysis.fertilizer,
          plantingSchedule: analysis.plantingSchedule,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Failed to save soil analysis");
      }

      setSaveMessage("Soil analysis saved.");
    } catch (error) {
      setSaveMessage(
        error instanceof Error
          ? `Save failed: ${error.message}`
          : "Save failed."
      );
    } finally {
      setSaving(false);
    }
  };

  return {
    soilInput,
    analysis,
    updateInput,
    saveAnalysis,
    saving,
    saveMessage,
  };
}
