const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

//config dotenv file
dotenv.config();

//connect to database
connectDB();

const app = express();

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server runs on port ${process.env.PORT}`);
});