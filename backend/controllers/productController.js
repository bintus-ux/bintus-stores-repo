import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all cap items
// @route  GET /api/categoryItems/caps
// @access Public

const getProductByCategory = asyncHandler(async (req, res) => {
  const pageSize = 6
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.count({ category: req.query.category })

  const data = await Product.find({ category: req.query.category })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ data, page, pages: Math.ceil(count / pageSize) })
})

// @desc   Get single cap item
// @route  GET /api/categoryItems/caps/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const data = await Product.findById(req.params.id)

  if (data) {
    res.json(data)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const searchProducts = asyncHandler(async (req, res) => {
  const keyword = req.params.keyword

  const data = await Product.find({
    name: {
      $regex: keyword,
      $options: 'i',
    },
  })
  if (data) {
    res.json(data)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProductByCategory, getProductById, searchProducts }
