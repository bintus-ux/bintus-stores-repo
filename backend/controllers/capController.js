import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all cap items
// @route  GET /api/categoryItems/caps
// @access Public

const getCaps = asyncHandler(async (req, res) => {
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
  const capItems = await Product.find({ category: 'Caps', ...keyword })
    .limit(itemPageSize)
    .skip(itemPageSize * (itemPage - 1))

  res.json({ capItems, itemPage, pages: Math.ceil(count / itemPageSize) })
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
