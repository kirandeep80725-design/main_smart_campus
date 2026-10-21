const { create } = require("axios")
const mongoose = require("mongoose")
const jobSchema = new mongoose.Schema({
    Jobtitle: { type: String, default: "" },
    Expertise: { type: String, default: "" },
    Experience: { type: String, default: "" },
    Education: { type: String, default: "" },
    Skills: { type: String, default: "" },
    Payscale: { type: String, default: "" },
    Description: { type: String, default: "" },
    Vacancies: { type: String, default: "" },
    Status: { type: String, default: "" },
    created: { type: String, default: "" },
})
model.exports = new mongoose.model("jobs", jobSchema)