import { Router, Request, Response } from 'express';

const apiRouter = Router();

// Users
apiRouter.get('/user', (req: Request, res: Response) => {
  res.json('hello from api/user');
});
apiRouter.get('/user/:id', () => {});
apiRouter.put('/user/:id', () => {});
apiRouter.post('/user', () => {});
apiRouter.delete('/user/:id', () => {});

// Projects
apiRouter.get('/project', () => {});
apiRouter.get('/project/:id', () => {});
apiRouter.put('/project/:id', () => {});
apiRouter.post('/project', () => {});
apiRouter.delete('/project/:id', () => {});

// Songs
apiRouter.get('/song', () => {});
apiRouter.get('/song/:id', () => {});
apiRouter.put('/song/:id', () => {});
apiRouter.post('/song', () => {});
apiRouter.delete('/song/:id', () => {});

// Notes
apiRouter.get('/note', () => {});
apiRouter.get('/note/:id', () => {});
apiRouter.put('/note/:id', () => {});
apiRouter.post('/note', () => {});
apiRouter.delete('/note/:id', () => {});

export default apiRouter;
