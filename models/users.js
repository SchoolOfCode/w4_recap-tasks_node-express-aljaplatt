import users from "../data/users.js";

// GET ALL USERS
export function getUsers() {
  return users;
}

// let allUsers = getUsers();
// console.log(allUsers);

// GET A USER BY ID
export function getUserByID(id) {
  // take in an id
  //   // find the user with that id in the users array
  const userWithMatchingID = users.find(function (user) {
    return user.id === id;
  });
  //   // if the id matches, return that user
  return userWithMatchingID;
}

// let userByID = getUserByID(2);
// console.log(userByID);

// CREATE A USER
export function createUser(newUser) {
  // take in a user & add it to the users array
  users.push(newUser);
  //   // return new user
  return users[users.length - 1];
}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {}

// DELETE A USER BY ID
export function deleteUserByID(id) {}
