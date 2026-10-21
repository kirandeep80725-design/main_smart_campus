const e = require("express");
const resume = require("./resumemodel")
const addData = (req, res) => {
    let validationErrors = [];
    if (!req.body.Title) {
        validationErrors.push("Title is required")
    }
    if (!req.body.userName) {
        validationErrors.push("userName is required")
    }
    if (!req.body.userid) {
        validationErrors.push("userid is required")
    }
    if (!req.body.Resumefile) {
        validationErrors.push("Resumefile is required")
    }
    if (!req.body.email) {
        validationErrors.push("email is required")
    }
    if (!req.body.Phone) {
        validationErrors.push("Phone is required")
    }
    if (!req.body.extractedText) {
        validationErrors.push("extractedText is required")
    }
    if (!req.body.Skills) {
        validationErrors.push("Skills is required")
    }
    if (!req.body.Education) {
        validationErrors.push("Education is required")
    }
    if (!req.body.experience) {
        validationErrors.push("experience is required")
    }
    if (!req.body.projects) {
        validationErrors.push("projects is required")
    }
    if (!req.body.Certifications) {
        validationErrors.push("Certifications is required")
    }
    if (!req.body.Strengths) {
        validationErrors.push("Strengths is required")
    }
    if (!req.body.weakness) {
        validationErrors.push("weakness is required")
    }
    if (validationErrors.length > 0) {
        res.json({
            Status: 422,
            Success: false,
            message: "Validation error occurs",
            errors: validationErrors
        })
    } else {
        resume.FindOne({
                Title: req.body.Title
            })
            .then((TitleData) => {
                if (!TitleData) {
                    let resumeObj = new Title();
                    resumeObj.Title = req.body.Title

                    resumeObj.userName = req.body.userName
                    resumeObj.userid = req.body.userid
                    resumeObj.Resumefile = req.body.Resumefile
                    resumeObj.email = req.body.email
                    resumeObj.Phone = req.body.Phone
                    resumeObj.extractedText = req.body.extractedText
                    resumeObj.Skills = req.body.Skills
                    resumeObj.Education = req.body.Education
                    resumeObj.experience = req.body.experience
                    resumeObj.projects = req.body.projects
                    resumeObj.Certifications = req.body.Certifications
                    resumeObj.Strengths = req.body.Strengths
                    resumeObj.weakness = req.body.weakness

                    resumeObj.save()
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
};