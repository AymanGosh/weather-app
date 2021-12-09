const express = require("express");
const path = require("path");

const app = express();

const api = require("./server/routes/api");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/", api);

const PORT = 8080;

app.listen(process.env.PORT || PORT);

// const port = 3000; //because why not
// app.listen(port, function () {
//   console.log(`Server running on ${port}`);
// });
