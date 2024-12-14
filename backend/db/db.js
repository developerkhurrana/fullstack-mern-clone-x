import mongoose from "mongoose";

const connectMDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MDB_URI);
    console.log("Connection Succesfull ✅");
  } catch (error) {
    console.error(`Connection to DB Failed: ${error.message}`);
    process.exit(1);
  }
};

export default connectMDB;
