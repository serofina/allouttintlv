const express = require("express");
const htmlRoute = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes.js");
require("dotenv").config();

const cors = require("cors");

app.use(
  cors({
    origin: ["https://allouttintlv.com/", "http://127.0.0.1:5500"],
  })
);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoute);

app.listen(PORT, () => {
  console.log(`app in running on node ${PORT}`);
});
