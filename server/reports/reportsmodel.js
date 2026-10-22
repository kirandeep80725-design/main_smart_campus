const mongoose = require("mongoose")
const reportsSchema = new mongoose.Schema({
    jobtitle: { type: String, default: "" },
    experience: { type: String, default: "" },
    education: { type: String, default: "" },
    skills: { type: String, default: "" },
    payscale: { type: String, default: "" },
    description: { type: String, default: "" },
    vacancies: { type: String, default: "" },
    Status: { type: Boolean, default: "true" },
    CreateAdd: { type: Date, default: Date.now() }
})
module.exports = new mongoose.model("reports", reportsSchema)