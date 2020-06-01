const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
//const bodyParser = require("body-parser");

//setup rquire API routes
const users = require("./routes/api/users");
const business = require("./routes/api/business");
const education = require("./routes/api/education");
const fitness = require("./routes/api/fitness");
const sport = require("./routes/api/sport");
const events = require("./routes/api/event");
// const passport = require("./config/passport");

//initilize app
const app = express();

// DB config
const db = process.env.MONGO_LOGIN || require("./config/keys").mongoURI;

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
app.use("/api/event", events); 

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
};

// If no API routes are hit, send the React app
// app.use(function (req, res) {
//     // res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


// setup server port
const port = process.env.PORT || 3001;

//setup server litener
app.listen(port, () => console.log(`server is started on port ${port}`));