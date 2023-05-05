const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
require("dotenv").config();

app.use(express.json());

const connectDB = require("./config/connectDB");
connectDB();

app.use("/api/member", require("./routes/member"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/coach", require("./routes/coach"));

app.use((req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 3555 ;

app.listen(PORT, (error) => {
  error
    ? console.error(`failed to connect ${error}`)
    : console.log(`server is running on port : ${PORT}`);
});
