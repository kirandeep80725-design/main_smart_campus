const router = require("express").Router()
const resumeController = require("../server/resume/resumeController")

router.post("/resume/add", resumeController.addData)

module.exports = router;