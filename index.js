const express = require("express");
const app = express();
const dotenv = require("dotenv");
const jwt = require ("jsonwebtoken");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const createRoute = require("./routes/create");


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL)
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/create", createRoute);



app.listen("5000",() => {
    console.log("listening on port");
});