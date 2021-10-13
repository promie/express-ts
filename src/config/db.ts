import mongoose from 'mongoose'
import 'dotenv/config'

const mongoURI =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGO_URI
    : process.env.MONGO_URI

const Mongoose = () => {
  const initialiseMongoConnection = () => {
    return new Promise((resolve, reject) => {
      mongoose.connect(mongoURI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })

      const db = mongoose.connection

      db.on('error', err => {
        console.error.bind(console, 'connection error:')
        return reject(err)
      })
      db.on('open', () => {
        // we're connected!
        // Logger.info('Connected to MongoDB...')
        return resolve(mongoose)
      })
    })
  }

  return { initialiseMongoConnection }
}

export default Mongoose
