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

function generateID() {
  // Look through the users list
  // Find the first ID number missing, or the next number
  //in the sequence
  // return that number
  let result = users.length;
  return result;
}

let newID = generateID();
console.log(newID);
// CREATE A USER
export function createUser(newUser) {
  // take in a user & add it to the users array
  users.push(newUser);
  newUser.id = generateID();
  //   // return new user
  return users[users.length - 1];
}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {
  // take in the id and the updated user
  // find user with supplied id
  const userWithMatchingID = users.findIndex(function (user) {
    return user.id === id;
  });
  // replace old user with updated user
  users[userWithMatchingID] = updatedUser;
  // return the new user
  return users[userWithMatchingID];
}

// DELETE A USER BY ID
export function deleteUserByID(targetID) {
  // find user with matching id
  const userWithMatchingID = users.findIndex(function (user) {
    return user.id === targetID;
  });
  const deletedUser = users[userWithMatchingID];
  //   // remove user from users array
  users.splice(userWithMatchingID, 1);
  //   // return removed item
  return deletedUser;
}
