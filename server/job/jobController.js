const e = require("express");
const job = require("./jobmodel")
const addData = (req, res) => {
    let validationErrors = [];
    if (!req.body.jobtitle) {
        validationErrors.push("jobtitle is required")
    }
    if (!req.body.expertise) {
        validationErrors.push("expertise is required")
    }
    if (!req.body.experience) {
        validationErrors.push("experience is required")
    }
    if (!req.body.education) {
        validationErrors.push("education is required")
    }
    if (!req.body.skills) {
        validationErrors.push("skills is required")
    }
    if (!req.body.payscale) {
        validationErrors.push("payscale is required")
    }
    if (!req.body.description) {
        validationErrors.push("discription is required")
    }
    if (!req.body.vacancies) {
        validationErrors.push("vacancies is required")
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
            .then((jobtitleData) => {
                if (!jobtitleData) {
                    let jobObj = new jobtitle();
                    
                    jobObj.jobtitle = req.body.jobtitle
                    jobObj.expertise = req.body.expertise
                    jobObj.education = req.body.education
                    jobObj.skills = req.body.skills
                    jobObj.payscale = req.body.payscale
                    jobObj.description = req.body.description
                    jobObj.vacancies = req.body.vacancies

                    jobObj.save()
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