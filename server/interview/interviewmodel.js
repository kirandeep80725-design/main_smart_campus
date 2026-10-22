const mongoose = require("mongoose")
const interviewSchema = new mongoose.Schema({
    userid: { type: String, default: "" },
    jobid: { type: String, default: "" },
    resumeid: { type: String, default: "" },
    questions: { type: String, default: "" },
    totalscore: { type: String, default: "" },
    feedback: { type: String, default: "" },
    strenths: { type: String, default: "" },
    improvement: { type: String, default: "" },
    Status: { type: Boolean, default: "true" },
    CreateAdd: { type: Date, default: Date.now() }
})
module.exports = new mongoose.model("interviews", interviewSchema)