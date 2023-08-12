import express from 'express'
import asyncHandler from 'express-async-handler'
const newArrivalsRouter = express.Router()
import Product from '../models/productModel.js'

// @desc   Fetch all new arrival items
// @route  GET /api/categoryItems
// @access Public

newArrivalsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const newArrival = await Product.findById(req.params.id)

    if (newArrival) {
      res.json(newArrival)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default newArrivalsRouter
