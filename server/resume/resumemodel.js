const mongoose = require("mongoose");
const resumeSchema = new mongoose.Schema({

    Title: { type: String, default: "" },
    UserName: { type: String, default: "" },
    Userid: { type: String, default: "" },
    Resumefile: { type: String, default: "" },
    email: { type: String, default: "" },
    Phone: { type: String, default: "" },
    extractedText: { type: String, default: "" },
    skills: { type: String, default: "" },
    Education: { type: String, default: "" },
    experiance: { type: String, default: "" },
    Projects: { type: String, default: "" },
    Certifications: { type: String, default: "" },
    Strenths: { type: String, default: "" },
    Weakness: { type: String, default: "" },
    Status: { type: Boolean, default: true },
    CreateAdd: { type: Date, default: Date.now() }


})

module.exports = new mongoose.model("resume", resumeSchema)