import { Router } from 'express';
import { productController } from './product.controller';
import { upload } from '../../helpers/fileUploadHelper';

const productRouter = Router();
productRouter.post(
  '/products',
  upload.single('file'),
  productController.createProduct,
);
productRouter.get('/products', productController.getProduct);
productRouter.get('/products/:productId', productController.getSingleProduct);
productRouter.put('/products/:productId', productController.updateProduct);
productRouter.delete('/products/:productId', productController.deleteProduct);

export default productRouter;
