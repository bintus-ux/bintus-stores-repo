import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all cap items
// @route  GET /api/categoryItems/caps
// @access Public

const getCaps = asyncHandler(async (req, res) => {
  const capProducts = await Product.find({ category: 'Caps' })

  res.json(capProducts)
})

// @desc   Get single cap item
// @route  GET /api/categoryItems/caps/:id
// @access Public
const getCapById = asyncHandler(async (req, res) => {
  const cap = await Product.findById(req.params.id)

  if (cap) {
    res.json(cap)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getCaps, getCapById }
