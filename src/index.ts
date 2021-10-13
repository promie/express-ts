import Mongoose from './config/db'

import { Logger } from './utils'
import app from './app'
import http from 'http'

const PORT = process.env.PORT || 5000

const startServer = async (): Promise<http.Server> => {
  await Mongoose().initialiseMongoConnection()
  return app.listen(PORT, () => {
    Logger.info(`Server is running on port ${PORT}`)
  })
}

void startServer()
