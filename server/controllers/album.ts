import { NextFunction, Request, Response } from 'express';
import prisma from '../db';

export const getAlbums = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const albums = await prisma.album.findMany({
      where: {
        artistId: req.body.artistId,
      },
    });
    res.json({ data: albums });
  } catch (error) {
    next(error);
  }
};

export const getOneAlbum = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const album = await prisma.album.findFirst({
      where: {
        id: req.params.id,
      },
      include: {
        songs: true,
      },
    });
    res.json({ data: album });
  } catch (error) {
    next(error);
  }
};

export const createAlbum = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const album = await prisma.album.create({
      data: {
        name: req.body.name,
        artistId: req.body.artistId,
      },
    });

    res.json({ data: album });
  } catch (error) {
    next(error);
  }
};

export const updateAlbumName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const album = await prisma.album.update({
      where: {
        id: req.params.id,
      },
      data: { name: req.body.name },
    });

    res.json({ data: album });
  } catch (error) {
    next(error);
  }
};

export const deleteAlbum = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.album.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({ message: 'success' });
  } catch (error) {
    next(error);
  }
};
