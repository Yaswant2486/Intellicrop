import { Model, Schema, model, models } from "mongoose";

export type UserDocument = {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
};

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const User: Model<UserDocument> =
  models.User || model<UserDocument>("User", userSchema);
