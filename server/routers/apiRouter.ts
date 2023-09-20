import { Router, Request, Response } from 'express';
import { body, param } from 'express-validator';
import prisma from '../db';
import { handleInputErrors } from '../modules/handleInputErrors';

const apiRouter = Router();

//////////////////// Artist /////////////////////////////////////////////////////////////////////////////////////
apiRouter.get('/artist', async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: res.locals.userId,
    },
    include: {
      artists: true,
    },
  });
  res.json({ data: user?.artists });
});

apiRouter.get('/artist/:id', param('id').exists().isString(), handleInputErrors, async (req: Request, res: Response) => {
  const artist = await prisma.artist.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      albums: true,
    },
  });
  res.json({ data: artist });
});

apiRouter.post('/artist', body('name').exists().isString(), handleInputErrors, async (req: Request, res: Response) => {
  const artist = await prisma.artist.create({
    data: {
      name: req.body.name,
      userId: res.locals.userId,
    },
  });

  res.json({ data: artist });
});

apiRouter.put('/artist/:id', body('name').exists().isString(), param('id').exists().isString(), handleInputErrors, async (req: Request, res: Response) => {
  const artist = await prisma.artist.update({
    where: {
      id: req.params.id,
      userId: res.locals.userId,
    },
    data: { name: req.body.name },
  });

  res.json({ data: artist });
});

apiRouter.delete('/artist/:id', param('id').exists().isString(), async (req: Request, res: Response) => {
  await prisma.artist.delete({
    where: {
      id: req.params.id,
      userId: res.locals.userId,
    },
  });

  res.json({ message: 'success' });
});

//////////////////// Albums /////////////////////////////////////////////////////////////////////////////////////
apiRouter.get('/album', body('artistId').exists().isString(), handleInputErrors, async (req: Request, res: Response) => {
  const albums = await prisma.album.findMany({
    where: {
      artistId: req.body.artistId,
    },
  });
  res.json({ data: albums });
});

apiRouter.get('/album/:id', body('id').exists().isString(), handleInputErrors, async (req: Request, res: Response) => {
  const album = await prisma.album.findMany({
    where: {
      id: req.body.id,
    },
    include: {
      songs: true,
    },
  });
  res.json({ data: album });
});

apiRouter.put('/album/:id', (req: Request, res: Response) => {});
apiRouter.post('/album', (req: Request, res: Response) => {});
apiRouter.delete('/album/:id', (req: Request, res: Response) => {});

//////////////////// Songs /////////////////////////////////////////////////////////////////////////////////////
apiRouter.get('/song', (req: Request, res: Response) => {});
apiRouter.get('/song/:id', (req: Request, res: Response) => {});
apiRouter.put('/song/:id', (req: Request, res: Response) => {});
apiRouter.post('/song', (req: Request, res: Response) => {});
apiRouter.delete('/song/:id', (req: Request, res: Response) => {});

//////////////////// Notes /////////////////////////////////////////////////////////////////////////////////////
apiRouter.get('/note', (req: Request, res: Response) => {});
apiRouter.get('/note/:id', (req: Request, res: Response) => {});
apiRouter.put('/note/:id', (req: Request, res: Response) => {});
apiRouter.post('/note', (req: Request, res: Response) => {});
apiRouter.delete('/note/:id', (req: Request, res: Response) => {});

export default apiRouter;
