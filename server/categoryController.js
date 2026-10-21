const category = require("./categorymodel")
const addData = (req, res) => {
    let validationErrors = [];
    if (!req.body.categoryName) {
        validationErrors.push("categoryName is required")
    }
    if (req.body.description) {
        validationErrors.push("description is required")
    }
    if (validationErrors.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "validation error occurs",
            errors: validationErrors
        })
    } else {
        category.FindOne({ categoryName: req.body.categoryName })
            .then((categoryData) => {
                if (!categoryData) {
                    let categoryObj = new category();
                    categoryObj.categoryName = req.body.categoryName
                    categoryObj.description = req.body.description
                    categoryObj.save()
                        .then((resData) => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "DATA ADDED SUCCESSFULLY",
                                data: resData
                            })
                        })
                        .catch((err) => {
                            res.json({
                                status: 500,
                                success: false,
                                massage: "internal sarver error",
                                errors: err.message
                            })
                        })
                } else {
                    res.json({
                        status: 422,
                        success: false,
                        message: "Data already exits",
                        data: categoryData,
                    })
                }

            })
            .catch((err) => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal server error",
                    errors: err.message
                })
            })
    }
}