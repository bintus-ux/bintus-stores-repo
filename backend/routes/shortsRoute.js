import express from 'express'
const shortsRouter = express.Router()
import { getShorts, getShortById } from '../controllers/shortController.js'

shortsRouter.route('/').get(getShorts)

shortsRouter.route('/:id').get(getShortById)

export default shortsRouter
