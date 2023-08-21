import express from 'express'
const tshirtsRouter = express.Router()
import { getTshirts, getTshirtById } from '../controllers/tshirtController.js'

tshirtsRouter.route('/').get(getTshirts)

tshirtsRouter.route('/:id').get(getTshirtById)

export default tshirtsRouter
