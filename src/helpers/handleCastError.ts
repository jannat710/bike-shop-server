import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleCastError = (err: any, res: Response) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: err.message,
    error: err,
  });
};
