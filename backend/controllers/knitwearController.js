import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all knitwear items
// @route  GET /api/categoryItems/knitwears
// @access Public

const getKnitwears = asyncHandler(async (req, res) => {
  const knitwearProducts = await Product.find({ category: 'Knitwears' })

  res.json(knitwearProducts)
})

// @desc   Get single knitwear item
// @route  GET /api/categoryItems/knitwears/:id
// @access Public
const getKnitwearById = asyncHandler(async (req, res) => {
  const knitwear = await Product.findById(req.params.id)

  if (knitwear) {
    res.json(knitwear)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getKnitwears, getKnitwearById }
