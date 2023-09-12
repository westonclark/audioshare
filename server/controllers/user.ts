import { Request, Response } from 'express';
import prisma from '../db';
import { createJWT, checkJWT, hashPassword, comparePasswords } from '../modules/auth';

export const createNewUser = async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: await hashPassword(req.body.password),
    },
  });

  req.cookies.bearer = createJWT(user.id);
  res.json({ message: 'success' });
};

export const signIn = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  const valid = await comparePasswords(req.body.password, user!.password);

  if (!valid) {
    res.status(401);
    res.json({ message: 'Incorect Password' });
  }

  req.cookies.bearer = createJWT(user!.id);
  res.json({ message: 'success' });
};
