const job = require("./interviewmodel")
const addData = (req, res) => {
    let validationErrors = [];
    if (!req.body.userid) {
        validationErrors.push("userid is required")
    }
    if (!req.body.jobid) {
        validationErrors.push("jobid is required")
    }
    if (!req.body.resumeid) {
        validationErrors.push("resumeid is required")
    }
    if (!req.body.questions) {
        validationErrors.push("questions is required")
    }
    if (!req.body.totalscore) {
        validationErrors.push("totalscore is required")
    }
    if (!req.body.feedback) {
        validationErrors.push("feedback is required")
    }
    if (!req.body.strengths) {
        validationErrors.push("strengths is required")
    }
    if (!req.body.improvements) {
        validationErrors.push("improvements is required")
    }


    if (validationErrors.length > 0) {
        res.json({
            Status: 422,
            Success: false,
            message: "Validation error occurs",
            errors: validationErrors
        })
    } else {
        job.FindOne({
                jobtitle: req.body.jobtitle
            })
            .then((interviewData) => {
                if (!interviewData) {
                    let interviewObj = new jobtitle();

                    interviewObj.userid = req.body.userid
                    interviewObj.jobid = req.body.jobid
                    interviewObj.resumeid = req.body.resumeid
                    interviewObj.questions = req.body.questions
                    interviewObj.totalscore = req.body.totalscore
                    interviewObj.feedback = req.body.feedback
                    interviewObj.strengths = req.body.strengths
                    interviewObj.improvements = req.body.improvements


                    interviewObj.save()
                        .then((resDate) => {
                            res.json({
                                Status: 200,
                                Success: true,
                                message: "DATA ADDED SUCCESSFULLY",
                                data: resDate
                            })

                        })
                        .Catch((err) => {
                            res.json({
                                Status: 500,
                                Success: false,
                                message: "Inteernal server error",
                                errors: err.message
                            })
                        })
                } else {
                    res.json({
                        Status: 422,
                        Success: false,
                        message: "Data already exit",
                        data: resumedata
                    })
                }

            })
            .Catch((err) => {
                res.json({
                    Status: 500,
                    Success: false,
                    message: "Internal server error",
                    errors: err.message
                })
            })
    }
}