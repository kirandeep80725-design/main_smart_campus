const mongoose = require("mongoose");
const categorySchema = new mongooseSchema({
    categoryName: { type: String, default: "" },
    description: { type: String, default: "" },
    Status: { type: Boolean, default: true },
    createAdd: { type: DataTransfer.now(), default: null }
})

mongoose.model.exports = new mongoose.model("category", categorySchema)