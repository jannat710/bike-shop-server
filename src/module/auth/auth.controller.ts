import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    status: true,
    message: 'User is registered successfully',
    data: {
      id: result._id,
      name: result.name,
      email: result.email,
      userStatus: result.userStatus,
      role: result.role,
    },
  });
});
const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    status: true,
    message: 'User logged in successfully',
    token: result?.token ?? 'No Token Generated',
    data: {
      name: result?.user?.name,
      email: result?.user?.email,
      role: result?.user?.role,
      userStatus: result?.user?.userStatus,
    },
  });
});

const forgetPassword = catchAsync(async (req: Request, res: Response) => {
  await AuthService.forgetPassword(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    status: true,
    message: 'Password reset link sent to your email',
    data: null,
  });
});

export const AuthControllers = {
  register,
  login,
  forgetPassword,
};
