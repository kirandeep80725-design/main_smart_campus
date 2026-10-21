const user = require("./usermodel")
const addData = (req, res) => {
    let validationErrors = [];
    if (!req.body.name) {
        validationErrors.push("name is required")
    }
    if (!req.body.email) {
        validationErrors.push("email is required")
    }
    if (!req.body.password) {
        validationErrors.push("password is required")
    }
    if (!req.body.contact) {
        validationErrors.push("contact is required")
    }
    if (!req.body.address) {
        validationErrors.push("address is required")
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
                jobtitle: req.body.jobtitle
            })
            .then((jobtitleData) => {
                if (!jobtitleData) {
                    let jobObj = new jobtitle();

                    userObj.name = req.body.name
                    userObj.email = req.body.email
                    userObj.password = req.body.password
                    userObj.contact = req.body.contact
                    userObj.address = req.body.address

                    userObj.save()
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