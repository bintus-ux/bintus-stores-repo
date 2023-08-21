import express from 'express'
const hoodiesRouter = express.Router()
import { getHoodies, getHoodieById } from '../controllers/hoodieController.js'

hoodiesRouter.route('/').get(getHoodies)
hoodiesRouter.route('/:id').get(getHoodieById)

export default hoodiesRouter
