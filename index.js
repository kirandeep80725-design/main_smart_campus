const express = require("express")
const app = express();
const port = 3006;

const config = require("./config/db")

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: false }))
const routes = require("./routes/apiRoutes")
app.use("/api", routes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});