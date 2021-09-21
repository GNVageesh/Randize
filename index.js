const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user/", require("./routes/users"));

app.listen(PORT, () => console.log("Started RANDIZE..."));
