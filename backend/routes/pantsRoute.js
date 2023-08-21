import express from 'express'
const pantsRouter = express.Router()
import { getPants, getPantById } from '../controllers/pantController.js'

pantsRouter.route('/').get(getPants)

pantsRouter.route('/:id').get(getPantById)

export default pantsRouter
