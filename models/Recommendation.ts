import { Model, Schema, Types, model, models } from "mongoose";

export type RecommendationDocument = {
  soilSampleId: Types.ObjectId;
  crops: string[];
  fertilizer: string;
  plantingSchedule: string;
  generatedAt: Date;
};

const recommendationSchema = new Schema<RecommendationDocument>({
  soilSampleId: { type: Schema.Types.ObjectId, ref: "SoilSample", required: true },
  crops: [{ type: String }],
  fertilizer: { type: String, default: "" },
  plantingSchedule: { type: String, default: "" },
  generatedAt: { type: Date, default: Date.now },
});

export const Recommendation: Model<RecommendationDocument> =
  models.Recommendation ||
  model<RecommendationDocument>("Recommendation", recommendationSchema);
