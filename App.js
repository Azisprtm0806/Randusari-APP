const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use("/register", require("./routes/register"));
app.use("/auth-user", require("./routes/auth"));
app.use("/forgot-password", require("./routes/forgotPass"));
app.use("/reset-password", require("./routes/resetPass"));
app.use("/kas", require("./routes/kas"));
app.use("/warga", require("./routes/warga"));

mongoose
  .connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
