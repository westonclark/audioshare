import { Request, Response } from 'express';
import prisma from '../db';

export const getAlbums = async (req: Request, res: Response) => {
  const albums = await prisma.album.findMany({
    where: {
      artistId: req.body.artistId,
    },
  });
  res.json({ data: albums });
};

export const getOneAlbum = async (req: Request, res: Response) => {
  const album = await prisma.album.findMany({
    where: {
      id: req.body.id,
    },
    include: {
      songs: true,
    },
  });
  res.json({ data: album });
};
