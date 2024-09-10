// src/routes/claimsRoutes.ts
import { Router } from 'express';
import { createClaim, getAllClaims, updateClaimStatus } from '../controllers/claimsController';

const router = Router();

router.post('/claims', createClaim);
router.get('/claims', getAllClaims);
router.patch('/claims/:id', updateClaimStatus);

export default router;
