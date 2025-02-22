import express, { Request, Response, NextFunction } from 'express';
import Routes from "./router/Routes";
import connectDB from './Db/db';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));

// Database connection
connectDB()
  .then(() => {
    console.log("Successfully connected to MongoDB");
    
    // Routes
    app.use("/api/v1", Routes);
    
    // Test endpoint
    app.get('/test', (req: Request, res: Response) => {
      res.status(200).json({ 
        message: 'Welcome to TypeScript Express Server!',
        environment: process.env.NODE_ENV
      });
    });

    // Error handling middleware
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).json({ error: "Something went wrong!" });
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
