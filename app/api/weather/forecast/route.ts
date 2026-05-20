import { NextResponse } from "next/server";

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "city is required" }, { status: 400 });
  }

  if (!OPENWEATHER_API_KEY) {
    return NextResponse.json(
      { error: "OPENWEATHER_API_KEY is missing in environment." },
      { status: 500 }
    );
  }

  try {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    const response = await fetch(forecastUrl);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message || "Failed to fetch forecast" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    const details =
      error instanceof Error ? error.message : "Unexpected forecast error";
    return NextResponse.json(
      { error: "Failed to fetch forecast", details },
      { status: 500 }
    );
  }
}
