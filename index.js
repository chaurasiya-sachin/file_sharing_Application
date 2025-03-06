
const express = require("express");
const mongoose = require("mongoose")

const fileRoute = require("./routes/file.route");

const app = express();

app.use(express.json())

app.use(fileRoute);

// DB connection 
mongoose
    .connect("mongodb+srv://chaurasiyasachin434:9HyZ9VkfxTDycEfw@myfirstcluster.6qqan.mongodb.net/")
    .then(()=> console.log("DB Connected Successfully")    )
    .catch(err=> console.log("Error while connecting to DB",err)    )

app.listen(5050, () => {
  console.log("Server is up on port :5050");
});
