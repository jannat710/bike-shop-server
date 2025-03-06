import User from '../user/user.model';
import { IUser } from '../user/user.interface';
import AppError from '../../helpers/AppError';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendMail from '../../utils/sendEmail';

const register = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const login = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({ email: payload?.email }).select(
    '+password',
  );

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found !');
  }

  const userStatus = user?.userStatus;

  if (userStatus === 'inactive') {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked !!');
  }
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Wrong Password! ');
  }

  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };

  const token = jwt.sign(jwtPayload, 'secret', { expiresIn: '30d' });

  return { token, user };
};

const forgetPassword = async (payload: { email: string }) => {
  const user = await User.findOne({
    email: payload.email,
  });

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found!');
  }

  if (user?.userStatus === 'inactive') {
    throw new AppError(StatusCodes.FORBIDDEN, 'User is blocked!');
  }

  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };

  const token = jwt.sign(jwtPayload, 'secret', { expiresIn: '1h' });

  const resetLink = `http://localhost:5173/reset-password?_id=${user?._id}&token=${token}`;

  console.log(resetLink);
  await sendMail(user?.email, 'Reset password link', resetLink);
};

export const AuthService = {
  register,
  login,
  forgetPassword,
};
