import { productService } from './product.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

// Create a Bike

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await productService.createProduct(productData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Bike created successfully',
    data: result,
  });
});

//Get All Bikes
// const getProduct = catchAsync(async (req, res) => {
//   const { searchTerm } = req.query;
//   let filter = {};
//   if (searchTerm) {
//     filter = {
//       $or: [
//         { name: { $regex: searchTerm, $options: 'i' } },
//         { brand: { $regex: searchTerm, $options: 'i' } },
//         { category: { $regex: searchTerm, $options: 'i' } },
//       ],
//     };
//   }
//   const result = await productService.getProduct(filter);
//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     message: 'Bike retrieved successfully',
//     data: result,
//   });
// });
const getProduct = catchAsync(async (req, res) => {
  const result = await productService.getProduct(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Bike retrieved successfully',
    data: result,
  });
});

//Get a Specific Bike
const getSingleProduct = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  const result = await productService.getSingleProduct(productId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Bike retrieved successfully',
    data: result,
  });
});

//Update a Bike
const updateProduct = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  const body = req.body;
  const result = await productService.updateProduct(productId, body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Bike updated successfully',
    data: result,
  });
});

//Delete a Bike
const deleteProduct = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  await productService.deleteProduct(productId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Bike deleted successfully',
    data: {},
  });
});

export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
