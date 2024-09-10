// src/utils/validation.ts
import { body } from 'express-validator';

export const claimValidation = [
  body('patientId').notEmpty().withMessage('Patient ID is required'),
  body('claimAmount').isNumeric().withMessage('Claim amount must be a number'),
];
