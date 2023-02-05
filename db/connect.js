import mongoose from "mongoose";

const connect = async (url) => {
  console.log("Database connected!!");
  mongoose.set("strictQuery", false);
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connect;
