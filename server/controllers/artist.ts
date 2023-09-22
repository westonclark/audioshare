import { Request, Response, NextFunction } from 'express';
import prisma from '../db';

export const getArtists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: res.locals.userId,
      },
      include: {
        artists: true,
      },
    });
    res.json({ data: user?.artists });
  } catch (error) {
    next(error);
  }
};

export const getOneArtist = async (req: Request, res: Response) => {
  const artist = await prisma.artist.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      albums: true,
    },
  });
  res.json({ data: artist });
};

export const createArtist = async (req: Request, res: Response) => {
  const artist = await prisma.artist.create({
    data: {
      name: req.body.name,
      userId: res.locals.userId,
    },
  });

  res.json({ data: artist });
};

export const updateArtistName = async (req: Request, res: Response) => {
  const artist = await prisma.artist.update({
    where: {
      id: req.params.id,
      userId: res.locals.userId,
    },
    data: { name: req.body.name },
  });

  res.json({ data: artist });
};

export const deleteArtist = async (req: Request, res: Response) => {
  await prisma.artist.delete({
    where: {
      id: req.params.id,
      userId: res.locals.userId,
    },
  });

  res.json({ message: 'success' });
};
