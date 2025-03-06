
const express = require("express");
const mongoose = require("mongoose")

const fileRoute = require("./routes/file.route");

const app = express();

app.use(express.json())

app.use(fileRoute);

// DB connection 
mongoose
    .connect("mongodb://127.0.0.1:27017/file_sharing_application")
    .then(()=> console.log("DB Connected Successfully")    )
    .catch(err=> console.log("Error while connecting to DB",err)    )

app.listen(5050, () => {
  console.log("Server is up on port :5050");
});
