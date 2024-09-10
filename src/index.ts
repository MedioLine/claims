// src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import claimsRoutes from './routes/claimsRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', claimsRoutes);

// MongoDB Connection
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Start the server
app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
