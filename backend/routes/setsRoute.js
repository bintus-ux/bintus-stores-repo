import express from 'express'
const setsRouter = express.Router()
import { getSets, getSetById } from '../controllers/setController.js'

setsRouter.route('/').get(getSets)

setsRouter.route('/:id').get(getSetById)

export default setsRouter
