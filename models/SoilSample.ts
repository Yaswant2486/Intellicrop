import { Model, Schema, Types, model, models } from "mongoose";

export type SoilSampleDocument = {
  userId?: Types.ObjectId;
  location: string;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;
  date: Date;
};

const soilSampleSchema = new Schema<SoilSampleDocument>({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  location: { type: String, required: true },
  nitrogen: { type: Number, required: true },
  phosphorus: { type: Number, required: true },
  potassium: { type: Number, required: true },
  ph: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export const SoilSample: Model<SoilSampleDocument> =
  models.SoilSample || model<SoilSampleDocument>("SoilSample", soilSampleSchema);
