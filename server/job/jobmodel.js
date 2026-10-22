const mongoose = require("mongoose")
const jobSchema = new mongoose.Schema({
    jobtitle: { type: String, default: "" },
    expertise: { type: String, default: "" },
    experience: { type: String, default: "" },
    education: { type: String, default: "" },
    skills: { type: String, default: "" },
    payscale: { type: String, default: "" },
    description: { type: String, default: "" },
    vacancies: { type: String, default: "" },
    status: { type: String, default: "" },
    createAdd: { type: Date, default: Date.now() }
})
module.exports = new mongoose.model("job", jobSchema)