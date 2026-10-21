const e = require("express");
const reports = require("./reportsmodel")
const addData = (req, res) => {
    let validationErrors = [];
    if (!req.body.userid) {
        validationErrors.push("userid is required")
    }
    if (!req.body.resumeid) {
        validationErrors.push("resumeid is required")
    }
    if (!req.body.jobid) {
        validationErrors.push("jobid is required")
    }
    if (!req.body.interviewid) {
        validationErrors.push("interviewid is required")
    }
    if (!req.body.resumematchscore) {
        validationErrors.push("resumematchscore is required")
    }
    if (!req.body.interviewscore) {
        validationErrors.push("interviewscore is required")
    }
    if (!req.body.strengths) {
        validationErrors.push("strengths is required")
    }
    if (!req.body.improvements) {
        validationErrors.push("improvements is required")
    }
    if (!req.body.summary) {
        validationErrors.push("summary is required")
    }

}
if (validationErrors.length > 0) {
    res.json({
        status: 422,
        succes: false,
        Message: "validation error occurs",
        errors: validationErrors

    })
} else {
    reports.findOne({
            userid: req.body.userid
        })
        .then((reportsData) => {
                if (!reportsData) {
                    let reportsObj = new reports();
                    reportsObj.userid = req.body.userid
                    reportsObj.resumeid = req.body.resumeid
                    reportsObj.jobid = req.body.jobid
                    reportsObj.interviewid = req.body.interviewid
                    reportsObj.resumematchscore = req.body.resumematchscore
                    reportsObj.interviewscore = req.body.interviewscore
                    reportsObj.strengths = req.body.strengths
                    reportsObj.improvements = req.body.improvements
                    reportsObj.summary = req.body.summary

                    reportsObj.save()
                        .then((resDate) => {
                            status: 200,
                            succes: true,
                            Message: "Data Added successfully",
                            data: resData
                        })
                }
                .Catch((err) => {
                    res.json({
                        status: 500,
                        succes: false,
                        Message: "INTERNAL SERVER ERR",
                        errors: err.Message
                    })
                })
            } else {
                res.json({
                    status: 422,
                    succes: false,
                    Message: "data already exit",
                    data: reportsdata
                })
            }
            .Catch((err) => {
                res.json({
                    status: 500,
                    succes: false,
                    Message: "Internal server err",
                    errors: err.Message
                })
            })
        }