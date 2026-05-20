import { Model, Schema, model, models } from "mongoose";

export type WeatherLogDocument = {
  location: string;
  temperature?: number;
  humidity?: number;
  weather?: string;
  date: Date;
};

const weatherLogSchema = new Schema<WeatherLogDocument>({
  location: { type: String, required: true },
  temperature: Number,
  humidity: Number,
  weather: String,
  date: { type: Date, default: Date.now },
});

export const WeatherLog: Model<WeatherLogDocument> =
  models.WeatherLog || model<WeatherLogDocument>("WeatherLog", weatherLogSchema);
