const router = require("express").Router()
const resumeController = require("../server/resume/resumeController")
const jobController = require("../server/job/jobController")
const reportsController = require("../server/reports/reportsController")
const interviewController = require("../server/interview/interviewController")

router.post("/resume/add", resumeController.addData)
router.post("/job/add", jobController.addData)
router.post("/reports/add", reportsController.addData)
router.post("/interview/add", interviewController.addData)



module.exports = router;