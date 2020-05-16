const express = require("express");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");

//setup rquire API routes
const users = require("./routes/api/users");
const business = require("./routes/api/business");
const education = require("./routes/api/education");
const fitness = require("./routes/api/fitness");
const sport = require("./routes/api/sport");

//initilize app
const app = express();

// DB config
const db = require("./config/keys").mongoURI;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to mongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log("MongoDB is connected..."))
    .catch(err => console.log(err));

// Use routes
app.use("/api/users", users);
app.use("/api/business", business);
app.use("/api/education", education);
app.use("/api/fitness", fitness);
app.use("/api/sport", sport);


// setup server port
const port = process.env.PORT || 3000;

//setup server litener
app.listen(port, () => console.log(`server is started on port ${port}`));