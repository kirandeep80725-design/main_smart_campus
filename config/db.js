const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Smartcampus")

.then(() => {
        console.log("Database connected successfully")

    })
    .catch((err) => {
        console.log("Database not connected")
        console.log(err)
    })