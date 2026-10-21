const router = require("express").Router()
const resumeController = require("../server/resume/resumeController")

router.post("/resume/add".resumeController.add)

module.exports = router;