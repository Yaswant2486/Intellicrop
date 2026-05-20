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
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    const response = await fetch(weatherUrl);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message || "Failed to fetch current weather" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    const details =
      error instanceof Error ? error.message : "Unexpected weather error";
    return NextResponse.json(
      { error: "Failed to fetch current weather", details },
      { status: 500 }
    );
  }
}
