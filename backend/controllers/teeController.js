import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all tee items
// @route  GET /api/categoryItems/tees
// @access Public

const getTees = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const itemPageSize = 6
  const itemPage = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments()

  const teeItems = await Product.find({ category: 'Tees', ...keyword })
    .limit(itemPageSize)
    .skip(itemPageSize * (itemPage - 1))

  res.json({ teeItems, itemPage, pages: Math.ceil(count / itemPageSize) })
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
