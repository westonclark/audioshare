import express, { Express, Request, Response, NextFunction, ErrorRequestHandler, Router } from 'express';
import apiRouter from './routers/apiRouter';
import cors from 'cors';

// Create server
const app: Express = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Static Files
app.get('/', (req: Request, res: Response) => {
  res.json('hello from server');
});

// API Router
app.use('/api', apiRouter);

// Global Error Handling
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.json({ message: 'oops there was an error' });
});

export default app;
