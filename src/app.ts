import express, { Application, Request, Response } from 'express';
import productRouter from './module/product/product.router';
import orderRouter from './module/order/order.router';
import userRouter from './module/user/user.router';
import { globalErrorHandler } from './middlewares/globalErrorHandler';

const app: Application = express();

app.use(express.json());

app.use('/api', productRouter);
app.use('/api', orderRouter);
app.use('/api', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from setup file');
});

app.use(globalErrorHandler);

export default app;
