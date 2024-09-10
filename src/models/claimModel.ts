// src/models/claimModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IClaim extends Document {
  patientId: string;
  claimAmount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  details?: string;
}

const ClaimSchema: Schema = new Schema({
  patientId: { type: String, required: true },
  claimAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  details: { type: String },
});

export default mongoose.model<IClaim>('Claim', ClaimSchema);
