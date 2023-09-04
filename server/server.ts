import express, { Express, Request, Response, NextFunction, ErrorRequestHandler, Router } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.json('hello from server');
});

app.use('/api', (req: Request, res: Response) => {
  res.status(200);
});

export default app;
