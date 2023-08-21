import express from 'express'
const footwearsRouter = express.Router()
import {
  getFootwears,
  getFootwearById,
} from '../controllers/footwearController.js'

footwearsRouter.route('/').get(getFootwears)
footwearsRouter.route('/:id').get(getFootwearById)

export default footwearsRouter
