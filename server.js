const express = require("express");
const app = express();
////////////////////////////////////
const path = require("path");
//////////////////////////////////
app.use(express.static(path.join(__dirname, "dist")));
//////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//////////////////////////////////
//const api = require("./server/routes/api");
//////////////////////////////////
const router = express.Router();
//////////////////////////////////
module.exports = router;
////////////////////////////////
//app.use("/", api);
/////////////////////////////////
app.use(express.json());
////////////////////////////////

// const updateVisited = function (wonder) {
//     $.ajax({
//         url: `wonder/${wonder}`,
//         method: "PUT",
//         success: function (response) {
//             console.log("PUT complete")
//         }
//     })
// }
/////////////////////////////////

app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
  response.send("Ending the cycle, thanks for visiting");
});

app.post("/wonder", function (req, res) {
  console.log("Someone's trying to make a post request");
});

// let data = { name: newWonder, location: newLocation };
// $.post("/wonder", data, function (response) {
//   console.log("POST complete");
// });

app.get("/landing/:username", function (request, response) {
  response.send(`Hi there, ${request.params.username}`);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
