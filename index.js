require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", require("./src/routes"));
app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});
