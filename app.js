const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

// Routes import

const user = require("./routes/userRoute");
const private = require("./routes/private");




app.use("/api/auth", user);
app.use("/api/private", private);



// Middleware for errors
app.use(errorMiddleware);




module.exports = app;