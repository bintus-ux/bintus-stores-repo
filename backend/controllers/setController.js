import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all set items
// @route  GET /api/categoryItems/sets
// @access Public

const getSets = asyncHandler(async (req, res) => {
  const setProducts = await Product.find({ category: 'Sets' })

  res.json(setProducts)
})

// @desc   Get single set item
// @route  GET /api/categoryItems/sets/:id
// @access Public
const getSetById = asyncHandler(async (req, res) => {
  const set = await Product.findById(req.params.id)

  if (set) {
    res.json(set)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getSets, getSetById }
