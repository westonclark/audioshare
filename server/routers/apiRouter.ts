import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const apiRouter = Router();

// Artist
apiRouter.get('/artist', () => {});
apiRouter.get('/artist/:id', () => {});
apiRouter.put('/artist/:id', body('name').isString(), (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
});
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
