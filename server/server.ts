import express, { Express, Request, Response, NextFunction, ErrorRequestHandler, Router } from 'express';
import { checkAuth } from './modules/auth';
import apiRouter from './routers/apiRouter';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Create server
const app: Express = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve Static Files
app.get('/', (req: Request, res: Response) => {
  res.json('hello from server');
});

// API Router
app.use('/api', checkAuth, apiRouter);

// Global Error Handling
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.json({ message: 'oops there was an error' });
});

export default app;
