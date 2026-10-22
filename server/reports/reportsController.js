const reports = require("./reportsmodel");

const addData = (req, res) => {
    let validationErrors = [];

    // Validation
    if (!req.body.userid) {
        validationErrors.push("userid is required");
    }
    if (!req.body.resumeid) {
        validationErrors.push("resumeid is required");
    }
    if (!req.body.jobid) {
        validationErrors.push("jobid is required");
    }
    if (!req.body.interviewid) {
        validationErrors.push("interviewid is required");
    }
    if (!req.body.resumematchscore) {
        validationErrors.push("resumematchscore is required");
    }
    if (!req.body.interviewscore) {
        validationErrors.push("interviewscore is required");
    }
    if (!req.body.strengths) {
        validationErrors.push("strengths is required");
    }
    if (!req.body.improvements) {
        validationErrors.push("improvements is required");
    }
    if (!req.body.summary) {
        validationErrors.push("summary is required");
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


    reports.findOne({
            userid: req.body.userid
        })
        .then((reportsData) => {

            if (!reportsData) {
                let reportsObj = new reports();

                reportsObj.userid = req.body.userid;
                reportsObj.resumeid = req.body.resumeid;
                reportsObj.jobid = req.body.jobid;
                reportsObj.interviewid = req.body.interviewid;
                reportsObj.resumematchscore = req.body.resumematchscore;
                reportsObj.interviewscore = req.body.interviewscore;
                reportsObj.strengths = req.body.strengths;
                reportsObj.improvements = req.body.improvements;
                reportsObj.summary = req.body.summary;

                // Save report in MongoDB
                reportsObj.save()
                    .then((resData) => {
                        return res.status(201).json({
                            status: 201,
                            success: true,
                            message: "Data added successfully",
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
                    message: "Report already exists for this user",
                    data: reportsData
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