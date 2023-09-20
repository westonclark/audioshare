import jwt, { Secret } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';

// bcrypt
export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};

// JWT
export const createJWT = (userId: string) => {
  const token = jwt.sign(userId, process.env.JWT_SECRET as Secret);
  return token;
};

export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
  const { bearer } = req.cookies;

  if (!bearer) {
    res.status(401);
    res.json({ message: 'Please login to view this page' });
    return;
  }

  try {
    res.locals.userId = jwt.verify(bearer, process.env.JWT_SECRET as Secret);
    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    res.json({ message: 'Invalid Token' });
    return;
  }
};
