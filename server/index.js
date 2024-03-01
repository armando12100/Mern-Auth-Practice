import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to MongodB");
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.listen(process.env.PORT, () => {
    console.log('Server listening on port', process.env.PORT)
});

app.use("/server/user", userRoutes);