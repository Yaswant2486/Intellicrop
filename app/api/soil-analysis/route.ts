import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Recommendation } from "@/models/Recommendation";
import { SoilSample } from "@/models/SoilSample";

type SoilAnalysisPayload = {
  location?: string;
  nitrogen?: number;
  phosphorus?: number;
  potassium?: number;
  ph?: number;
  crops?: string[];
  fertilizer?: string;
  plantingSchedule?: string;
};

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = (await request.json()) as SoilAnalysisPayload;
    const {
      location,
      nitrogen,
      phosphorus,
      potassium,
      ph,
      crops,
      fertilizer,
      plantingSchedule,
    } = body;

    const hasMissingRequired =
      !location ||
      [nitrogen, phosphorus, potassium, ph].some(
        (value) => value === undefined || Number.isNaN(Number(value))
      );

    if (hasMissingRequired) {
      return NextResponse.json(
        {
          error: "location, nitrogen, phosphorus, potassium and ph are required.",
        },
        { status: 400 }
      );
    }

    const soilSample = await SoilSample.create({
      location,
      nitrogen,
      phosphorus,
      potassium,
      ph,
    });

    const recommendation = await Recommendation.create({
      soilSampleId: soilSample._id,
      crops: Array.isArray(crops) ? crops : [],
      fertilizer: fertilizer ?? "",
      plantingSchedule: plantingSchedule ?? "",
    });

    return NextResponse.json(
      {
        message: "Soil analysis saved successfully.",
        soilSampleId: soilSample._id,
        recommendationId: recommendation._id,
      },
      { status: 201 }
    );
  } catch (error) {
    const details =
      error instanceof Error ? error.message : "Unexpected persistence error";
    return NextResponse.json(
      { error: "Failed to save soil analysis", details },
      { status: 500 }
    );
  }
}
