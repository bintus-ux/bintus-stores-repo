import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all knitwear items
// @route  GET /api/categoryItems/knitwears
// @access Public

const getKnitwears = asyncHandler(async (req, res) => {
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

  const knitwearItems = await Product.find({
    category: 'Knitwears',
    ...keyword,
  })
    .limit(itemPageSize)
    .skip(itemPageSize * (itemPage - 1))

  res.json({ knitwearItems, itemPage, pages: Math.ceil(count / itemPageSize) })
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
