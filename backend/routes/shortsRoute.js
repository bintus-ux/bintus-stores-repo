import express from 'express'
import asyncHandler from 'express-async-handler'
const shortsRouter = express.Router()
import Product from '../models/productModel.js'

shortsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const shortProducts = await Product.find({ category: 'Shorts' })

    res.json(shortProducts)
  })
)

shortsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const short = await Product.findById(req.params.id)

    if (short) {
      res.json(short)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default shortsRouter
