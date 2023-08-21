import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all tee items
// @route  GET /api/categoryItems/tees
// @access Public

const getTees = asyncHandler(async (req, res) => {
  const teeProducts = await Product.find({ category: 'Tees' })

  res.json(teeProducts)
})

// @desc   Get single tee item
// @route  GET /api/categoryItems/tees/:id
// @access Public
const getTeeById = asyncHandler(async (req, res) => {
  const tee = await Product.findById(req.params.id)

  if (tee) {
    res.json(tee)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getTees, getTeeById }
