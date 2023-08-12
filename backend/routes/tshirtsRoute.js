import express from 'express'
import asyncHandler from 'express-async-handler'
const tshirtsRouter = express.Router()
import Product from '../models/productModel.js'

tshirtsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const tshirtsProducts = await Product.find({ category: 'Tshirts' })

    res.json(tshirtsProducts)
  })
)

tshirtsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const tshirt = await Product.findById(req.params.id)

    if (tshirt) {
      res.json(tshirt)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default tshirtsRouter
