import express from 'express'
import asyncHandler from 'express-async-handler'
const pantsRouter = express.Router()
import Product from '../models/productModel.js'

pantsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const pantProducts = await Product.find({ category: 'Pants' })

    res.json(pantProducts)
  })
)

pantsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const pant = await Product.findById(req.params.id)

    if (pant) {
      res.json(pant)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default pantsRouter
