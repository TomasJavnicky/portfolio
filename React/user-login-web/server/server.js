const express = require("express");
const getUsers = require("./routes");
const getUserById = require("./routes");
const addUser = require("./routes");
const deleteUser = require("./routes");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/getusers", getUsers);
app.use("/", getUserById);
app.post("/adduser", addUser);
app.delete("/", deleteUser);
app.listen(4000, () => console.log("Server on localhost:4000"));
