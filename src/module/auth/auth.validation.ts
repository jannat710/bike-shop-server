import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email must be provided and must be a string',
      })
      .email(),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const forgetPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }).email(),
  }),
});
const resetPasswordValidationSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required' }),
    token: z.string({ required_error: 'Token is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
  forgetPasswordValidationSchema,
  resetPasswordValidationSchema,
};
