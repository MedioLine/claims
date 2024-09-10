// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // Example middleware, replace with actual auth logic
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== 'Bearer exampleToken') {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  next();
};
