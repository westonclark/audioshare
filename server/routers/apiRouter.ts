import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import prisma from '../db';
import { handleInputErrors } from '../modules/handleInputErrors';

const apiRouter = Router();

// Artist
apiRouter.get('/artist', () => {});
apiRouter.get('/artist/:id', () => {});

apiRouter.put('/artist/:id', body('name').isString(), handleInputErrors, async (req: Request, res: Response) => {
  const artist = await prisma.artist.update({
    where: { id: req.params.id },
    data: { name: req.body.name },
  });

  res.json({ message: 'success' });
});

apiRouter.post('/artist', body('name').isString(), handleInputErrors, async (req: Request, res: Response) => {
  console.log(res.locals);
  const artist = await prisma.artist.create({
    data: {
      name: req.body.name,
      userId: res.locals.userId,
    },
  });

  res.json({ message: 'success' });
});

apiRouter.delete('/artist/:id', () => {});

// Albums
apiRouter.get('/album', () => {});
apiRouter.get('/album/:id', () => {});
apiRouter.put('/album/:id', () => {});
apiRouter.post('/album', () => {});
apiRouter.delete('/album/:id', () => {});

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
