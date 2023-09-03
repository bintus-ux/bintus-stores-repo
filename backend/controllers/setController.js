import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all set items
// @route  GET /api/categoryItems/sets
// @access Public

const getSets = asyncHandler(async (req, res) => {
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

  const setItems = await Product.find({ category: 'Sets', ...keyword })
    .limit(itemPageSize)
    .skip(itemPageSize * (itemPage - 1))

  res.json({ setItems, itemPage, pages: Math.ceil(count / itemPageSize) })
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
