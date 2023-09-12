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

// Artist
apiRouter.get('/artist', () => {});
apiRouter.get('/artist/:id', () => {});
apiRouter.put('/artist/:id', () => {});
apiRouter.post('/artist', () => {});
apiRouter.delete('/artist/:id', () => {});

// Albums
apiRouter.get('/al;bum', () => {});
apiRouter.get('/al;bum/:id', () => {});
apiRouter.put('/al;bum/:id', () => {});
apiRouter.post('/al;bum', () => {});
apiRouter.delete('/al;bum/:id', () => {});

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
