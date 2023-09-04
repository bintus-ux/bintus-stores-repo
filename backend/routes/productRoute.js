import express from 'express'
const productRouter = express.Router()
import {
  getProductByCategory,
  getProductById,
  searchProducts,
} from '../controllers/productController.js'

productRouter.route('/').get(getProductByCategory)

productRouter.route('/:id').get(getProductById)

productRouter.route('/search/:keyword').get(searchProducts)

export default productRouter
