import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from '../user/userValidation';
import { AuthControllers } from './auth.controller';

const authRouter = Router();

authRouter.post(
  '/register',
  validateRequest(UserValidation.userValidationSchema),
  AuthControllers.register,
);
// authRouter.post(
//   '/login',
//   validateRequest(AuthValidation.loginValidationSchema),
//   AuthControllers.login,
// );

export default authRouter;
