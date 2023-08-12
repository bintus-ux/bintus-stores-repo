import express from 'express'
import asyncHandler from 'express-async-handler'
const teesRouter = express.Router()
import Product from '../models/productModel.js'

teesRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const teesProducts = await Product.find({ category: 'Tees' })

    res.json(teesProducts)
  })
)

teesRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const tee = await Product.findById(req.params.id)

    if (tee) {
      res.json(tee)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default teesRouter
