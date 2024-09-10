// src/controllers/claimsController.ts
import { Request, Response } from 'express';
import Claim from '../models/claimModel';

// Create a new claim
export const createClaim = async (req: Request, res: Response): Promise<void> => {
  try {
    const claim = new Claim(req.body);
    await claim.save();
    res.status(201).json({ message: 'Claim submitted successfully', claim });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Get all claims
export const getAllClaims = async (req: Request, res: Response): Promise<void> => {
  try {
    const claims = await Claim.find();
    res.status(200).json(claims);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Update claim status
export const updateClaimStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const claim = await Claim.findByIdAndUpdate(id, { status, updatedAt: new Date() }, { new: true });
    if (!claim) {
      res.status(404).json({ message: 'Claim not found' });
      return;
    }
    res.status(200).json({ message: 'Claim status updated', claim });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
