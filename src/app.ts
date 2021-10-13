import express, { Application } from 'express'
import cors from 'cors'
import { ProductRoute } from './routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/products', ProductRoute)

export default app
