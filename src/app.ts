import express, { Application, Request, Response } from 'express';
import productRouter from './module/product/product.router';
import orderRouter from './module/order/order.router';
import userRouter from './module/user/user.router';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import { StatusCodes } from 'http-status-codes';
import authRouter from './module/auth/auth.route';

const app: Application = express();

app.use(express.json());

app.use('/api', productRouter);
app.use('/api', orderRouter);
app.use('/api', userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from setup file');
});

app.use(globalErrorHandler);

//Not Found Route
app.use('*', (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'API Not Found',
  });
});

export default app;
