import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResultSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/quiz-results", async (req, res) => {
    try {
      const validatedData = insertQuizResultSchema.parse(req.body);
      const result = await storage.createQuizResult(validatedData);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ 
        error: "Invalid quiz result data",
        details: error.message 
      });
    }
  });

  app.get("/api/quiz-results", async (req, res) => {
    try {
      const results = await storage.getQuizResults();
      res.json(results);
    } catch (error: any) {
      res.status(500).json({ 
        error: "Failed to fetch quiz results",
        details: error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
