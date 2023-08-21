import express from 'express'
const knitwearsRouter = express.Router()
import {
  getKnitwears,
  getKnitwearById,
} from '../controllers/knitwearController.js'

knitwearsRouter.route('/').get(getKnitwears)
knitwearsRouter.route('/:id').get(getKnitwearById)

export default knitwearsRouter
