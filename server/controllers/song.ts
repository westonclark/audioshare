import { Request, Response, NextFunction } from 'express';
import prisma from '../db';

export const getSongs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const album = await prisma.album.findUnique({
      where: {
        id: req.body.albumId,
      },
      include: {
        songs: true,
      },
    });
    res.json({ data: album?.songs });
  } catch (error) {
    next(error);
  }
};

export const getOneSong = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const song = await prisma.song.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        notes: true,
      },
    });
    res.json({ data: song });
  } catch (error) {
    next(error);
  }
};

export const createSong = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const song = await prisma.song.create({
      data: {
        name: req.body.name,
        albumId: req.body.albumId,
        // url: res.locals.url,
        url: 'songurl.com',
        version: req.body.version || 1,
      },
    });

    res.json({ data: song });
  } catch (error) {
    next(error);
  }
};

export const updateSongName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const song = await prisma.song.update({
      where: {
        id: req.params.id,
      },
      data: { name: req.body.name },
    });

    res.json({ data: song });
  } catch (error) {
    next(error);
  }
};

export const deleteSong = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.song.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({ message: 'success' });
  } catch (error) {
    next(error);
  }
};
