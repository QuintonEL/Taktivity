const pool = require('../db');

//get a single user from the data base given their email
const getUserByEmail = function(email){
  return pool.query(`
    SELECT *
    FROM users
    WHERE email = $1
  `, [email])
  .then(res => res.row[0]);
}
exports.getUserByEmail = getUserByEmail;

//get a single user from the database given their id
const getUserById = function(id){
  return pool.query(`
    SELECT *
    FROM users
    WHERE id = $1
    `, [id])
    .then(res => res.row[0]);
}
exports.getUserById = getUserById;

//add a new user to the database
const addUser = function(user){
  return pool.query(`
  INSERT INTO users (name, email, password)
  VALUES($1, $2, $3)
  RETURNING *
  `, [user.name, user.email, user.password])
  .then(res => res.row[0]);
}
exports.addUser = addUser;


