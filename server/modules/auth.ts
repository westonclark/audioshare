import jwt, { Secret } from 'jsonwebtoken';
import type { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

export const createJWT = (user: User) => {
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as Secret);
  return token;
};

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const { bearer } = req.cookies;

  console.log(req.cookies);

  if (!bearer) {
    res.json({ message: 'please login to view this page' });
    return;
  } else {
    next();
  }
};
