import { orderService } from './order.service';
import catchAsync from '../../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';

const createOrder = catchAsync(async (req, res) => {
  const orderData = req.body;

  const result = await orderService.createOrder(orderData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Order created successfully',
    data: result,
  });
});

const calculateRevenue = catchAsync(async (req, res) => {
  const totalRevenue = await orderService.calculateRevenue();
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Revenue calculated successfully',
    data: {
      totalRevenue: totalRevenue,
    },
  });
});

export const orderController = {
  createOrder,
  calculateRevenue,
};
