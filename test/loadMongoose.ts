import Mongoose from '../src/config/db'
;(async function () {
  await Mongoose().initialiseMongoConnection()
})()
