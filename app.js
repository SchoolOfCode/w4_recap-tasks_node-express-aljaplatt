import express from "express";
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";
const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/users", function (req, res) {
  // get all of the recipes and respond with the json
  const allUsers = getUsers();
  // respond with json
  res.json({
    success: true,
    payload: allUsers,
  });
});

app.get("/users/:id", function (req, res) {
  // get the id from the url // make sure id is typeof number (parseInt/Number)
  const storedID = Number(req.params.id);
  //   // get a user with that id
  const foundUser = getUserByID(storedID);
  //   // respond
  res.json({
    success: true,
    payload: foundUser,
  });
});

app.post("/users", function (req, res) {
  // get new user from the body - express middleware grabs json attached to the request and stores it in req.body
  //   // get the id from the url // make sure id is typeof number (parseInt/Number)
  const storedID = Number(req.params.id);
  //   // add new user to users
  const result = createUser(newUser);
  //   // respond with res.json to the user
  res.json({
    success: true,
    payload: result,
  });
});

app.put("/users/:id", function (req, res) {
  // get the id from the url // make sure id is typeof number (parseInt/Number)
  const storedID = Number(req.params.id);
  // take the body from the request
  const update = req.body;
  // update specified recipe (id) with the updates from the body
  const result = updateUserByID(storedID, update);
  // respond
  res.json({
    success: true,
    payload: result,
  });
});

app.delete("/users/:id", function (req, res) {
  // save the id in the url as a number
  const id = Number(req.params.id);
  //  create variable for deleteUser function call
  const deletedUser = deleteUserByID(id);

  res.json({
    success: true,
    payload: deletedUser,
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
