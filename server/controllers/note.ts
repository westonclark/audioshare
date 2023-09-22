import { Request, Response, NextFunction } from 'express';
import prisma from '../db';

export const getNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const song = await prisma.song.findUnique({
      where: {
        id: req.body.songId,
      },
      include: {
        notes: true,
      },
    });
    res.json({ data: song?.notes });
  } catch (error) {
    next(error);
  }
};

export const getOneNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await prisma.note.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.json({ data: note });
  } catch (error) {
    next(error);
  }
};

export const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await prisma.note.create({
      data: {
        value: req.body.value,
        songId: req.body.albumId,
      },
    });

    res.json({ data: note });
  } catch (error) {
    next(error);
  }
};

export const updateNoteChecked = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await prisma.note.update({
      where: {
        id: req.params.id,
      },
      data: { checked: req.body.checked },
    });

    res.json({ data: note });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.note.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({ message: 'success' });
  } catch (error) {
    next(error);
  }
};
