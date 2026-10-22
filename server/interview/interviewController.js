const job = require("./interviewmodel");

const addData = (req, res) => {
    let validationErrors = [];

    // Validation
    if (!req.body.userid) {
        validationErrors.push("userid is required");
    }
    if (!req.body.jobid) {
        validationErrors.push("jobid is required");
    }
    if (!req.body.resumeid) {
        validationErrors.push("resumeid is required");
    }
    if (!req.body.questions) {
        validationErrors.push("questions is required");
    }
    if (!req.body.totalscore) {
        validationErrors.push("totalscore is required");
    }
    if (!req.body.feedback) {
        validationErrors.push("feedback is required");
    }
    if (!req.body.strengths) {
        validationErrors.push("strengths is required");
    }
    if (!req.body.improvements) {
        validationErrors.push("improvements is required");
    }

    // Return validation errors
    if (validationErrors.length > 0) {
        return res.status(422).json({
            status: 422,
            success: false,
            message: "Validation errors occurred",
            errors: validationErrors
        });
    }

    // Check whether interview data already exists
    job.findOne({
            userid: req.body.userid,
            jobid: req.body.jobid,
            resumeid: req.body.resumeid
        })
        .then((interviewData) => {
            if (!interviewData) {
                let interviewObj = new job();

                interviewObj.userid = req.body.userid;
                interviewObj.jobid = req.body.jobid;
                interviewObj.resumeid = req.body.resumeid;
                interviewObj.questions = req.body.questions;
                interviewObj.totalscore = req.body.totalscore;
                interviewObj.feedback = req.body.feedback;
                interviewObj.strengths = req.body.strengths;
                interviewObj.improvements = req.body.improvements;

                // Save data in MongoDB
                interviewObj.save()
                    .then((resData) => {
                        return res.status(201).json({
                            status: 201,
                            success: true,
                            message: "Interview data added successfully",
                            data: resData
                        });
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            status: 500,
                            success: false,
                            message: "Internal server error",
                            errors: err.message
                        });
                    });

            } else {
                return res.status(409).json({
                    status: 409,
                    success: false,
                    message: "Interview data already exists",
                    data: interviewData
                });
            }
        })
        .catch((err) => {
            return res.status(500).json({
                status: 500,
                success: false,
                message: "Internal server error",
                errors: err.message
            });
        });
};

module.exports = { addData };