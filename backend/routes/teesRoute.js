import express from 'express'
import asyncHandler from 'express-async-handler'
const teesRouter = express.Router()
import { getTees, getTeeById } from '../controllers/teeController.js'

teesRouter.route('/').get(getTees)

teesRouter.route('/:id').get(getTeeById)

export default teesRouter
