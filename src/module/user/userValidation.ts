import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Name must be provided and must be a string' })
      .min(3)
      .max(50),

    email: z
      .string({ required_error: 'Email must be provided and must be a string' })
      .email(),

    password: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 characters long' })
      .max(20, { message: 'Password cannot be more than 20 characters' }),

    createdAt: z
      .date({ required_error: 'createdAt must be a valid date' })
      .optional(),

    updatedAt: z
      .date({ required_error: 'updatedAt must be a valid date' })
      .optional(),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
