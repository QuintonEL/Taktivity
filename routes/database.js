//PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('../lib/db');
const pool = new Pool(dbParams);
pool.connect();

//get a single user from the data base given their email
const getUserByEmail = function(email){
  return pool.query(`
    SELECT *
    FROM users
    WHERE email = $1
  `, [email])
  .then(res => res.rows[0]);
}
exports.getUserByEmail = getUserByEmail;

//get a single user from the database given their id
const getUserById = function(id){
  return pool.query(`
    SELECT *
    FROM users
    WHERE id = $1
    `, [id])
    .then(res => res.rows[0]);
}
exports.getUserById = getUserById;

//add a new user to the database
const addUser = function(user){
  return pool.query(`
  INSERT INTO users (email, password)
  VALUES($1, $2)
  RETURNING *
  `, [user.email, user.password])
  .then(res => res.rows[0])
  .catch(errrrr => console.log('errrrr', errrrr))
}
exports.addUser = addUser;


const getAllResources = function(){
  return pool.query(`
    SELECT *
    FROM resources
    LIMIT 15
  `, [])
  .then( res => res.rows[0]);
}

