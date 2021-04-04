import mongoose from 'mongoose'

console.log(process.env.MONGO_CLIENT)

const mongoClient = async () => {
  const conStr =
    process.env.NODE_ENV === 'production'
      ? process.env.PROD_MONGO_CLIENT
      : process.env.MONGO_CLIENT
  try {
    const con = await mongoose.connect(conStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })

    if (con) {
      console.log('MongoDB is connected')
    }
  } catch (error) {
    console.log(error)
  }
}

export default mongoClient
