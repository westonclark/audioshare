import { Router } from 'express';
import { createNewUser, signIn } from '../controllers/user';

const authRouter = Router();

// Signup and Login
authRouter.post('/signup', createNewUser);
authRouter.post('/signin', signIn);

export default authRouter;
