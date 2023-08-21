import express from 'express'
const capsRouter = express.Router()
import { getCaps, getCapById } from '../controllers/capController.js'

capsRouter.route('/').get(getCaps)
capsRouter.route('/:id').get(getCapById)

export default capsRouter
