import mongoose from "mongoose";

// Async because it returns a promise
const connectDB = async () => {
  try {
    // This takes Mongo uri, then second argument with set of options
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // with current version of mongoose we have to add few options, otherwise we'll be getting some warnings.
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // if failed to connect, return an error message and exit with failure
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

const connectDBProd = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_PRODUCTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export { connectDB, connectDBProd };
