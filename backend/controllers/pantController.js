import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all pant items
// @route  GET /api/categoryItems/pants
// @access Public

const getPants = asyncHandler(async (req, res) => {
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

  const pantItems = await Product.find({ category: 'Pants', ...keyword })
    .limit(itemPageSize)
    .skip(itemPageSize * (itemPage - 1))

  res.json({ pantItems, itemPage, pages: Math.ceil(count / itemPageSize) })
})

// @desc   Get single pant item
// @route  GET /api/categoryItems/pants/:id
// @access Public
const getPantById = asyncHandler(async (req, res) => {
  const pant = await Product.findById(req.params.id)

  if (pant) {
    res.json(pant)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getPants, getPantById }
