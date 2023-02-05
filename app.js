import express from "express";
import dotenv from "dotenv";
import connect from "./db/connect.js";
import authRoute from "./routers/authRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use("/api/v1", authRoute);

const start = async () => {
  await connect(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
};

start();
