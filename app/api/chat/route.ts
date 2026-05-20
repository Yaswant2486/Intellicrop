import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

export async function POST(request: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is missing in environment." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const message = body?.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction:
          "You are Intellicrop, expert AI farming assistant. Reply concisely in Hindi or English depending on user input.",
      },
    });

    return NextResponse.json({ response: response.text });
  } catch (error) {
    const details =
      error instanceof Error ? error.message : "Unexpected chat error";
    return NextResponse.json(
      { error: "AI assistant failed", details },
      { status: 500 }
    );
  }
}
