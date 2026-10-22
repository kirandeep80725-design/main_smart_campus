const user = require("./usermodel");

const addData = (req, res) => {
    let validationErrors = [];

    // Validation
    if (!req.body.name) {
        validationErrors.push("name is required");
    }
    if (!req.body.email) {
        validationErrors.push("email is required");
    }
    if (!req.body.password) {
        validationErrors.push("password is required");
    }
    if (!req.body.contact) {
        validationErrors.push("contact is required");
    }
    if (!req.body.address) {
        validationErrors.push("address is required");
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

    // Check whether email already exists
    user.findOne({
            email: req.body.email
        })
        .then((userData) => {
            if (!userData) {
                let userObj = new user();

                userObj.name = req.body.name;
                userObj.email = req.body.email;
                userObj.password = req.body.password;
                userObj.contact = req.body.contact;
                userObj.address = req.body.address;

                // Save user in MongoDB
                userObj.save()
                    .then((resData) => {
                        return res.status(201).json({
                            status: 201,
                            success: true,
                            message: "User registered successfully",
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
                    message: "Email already exists",
                    data: userData
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