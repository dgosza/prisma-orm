import { Router } from 'express';
import { CreateProductcontroller } from './controllers/CreateProductController';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateProductCategoryController } from './controllers/CreateProductCategoryController';

const createProduct = new CreateProductcontroller();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();

const routes = Router();

routes.post('/product', createProduct.handle);
routes.post('/category', createCategory.handle);
routes.post('/productCategory', createProductCategory.handle);

export default routes;
