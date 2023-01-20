const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes")
//configure mongoose
const app = express();
 
//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://root:123@137.184.32.84:1234/cinema?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
 
module.exports = app;