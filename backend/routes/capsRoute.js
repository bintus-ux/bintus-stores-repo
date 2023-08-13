import express from 'express'
import asyncHandler from 'express-async-handler'
const capsRouter = express.Router()
import Product from '../models/productModel.js'

// @desc   Fetch all cap items
// @route  GET /api/categoryItems
// @access Public

capsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const capProducts = await Product.find({ category: 'Caps' })

    res.json(capProducts)
  })
)

capsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const cap = await Product.findById(req.params.id)

    if (cap) {
      res.json(cap)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default capsRouter
