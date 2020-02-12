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
  .then(res => res.rows[0])
  .catch(errrrr => console.log('errrrr', errrrr))
}
exports.getUserByEmail = getUserByEmail;

//get a single user from the database given their id
const getUserById = function(id){
  return pool.query(`
    SELECT *
    FROM users
    WHERE id = $1
    `, [id])
    .then(res => res.rows[0])
    .catch(errrrr => console.log('errrrr', errrrr))
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

//get all resources
const getAllResources = function(){
  return pool.query(`
    SELECT *
    FROM resources
    LIMIT 15
  `, [])
  .then(res => res.rows);
}
exports.getAllResources = getAllResources;

//add a resource
const addResource = function(resource){
  return pool.query(`
    INSERT INTO resources (creator_id, title, url, description, image_url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `, [resource.creator_id, resource.title, resource.url, resource.description, resource.image_url])
  .then(res => res.rows[0]);
}
exports.addResource = addResource;

//add a comment
const addComment = function(comment){
return pool.query(`
  INSERT INTO comments (resource_id, user_id, text, created_at)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`, [comment.resource_id, comment.user_id, comment.text, comment.created_at])
.then(res => res.rows[0]);
}
exports.addComment = addComment;

//add a rating
const addRating = function(rating){
  return pool.query(`
    INSERT INTO ratings (user_id, resource_id, rating)
    VALUES ($1, $2, $3)
    RETURNING *;
  `, [rating.user_id, rating.resource_id, rating.rating])
  .then(res => res.rows[0]);
}
exports.addRating = addRating;

//add a favourite
const addFavourite = function(){
  return pool.query(`
    INSERT INTO favourites (resource_id, user_id,)
    VALUES ($1, $2)
    RETURNING *;
  `, [favourites.resource_id, favourites.user_id])
  .then(res => res.rows[0]);
}
exports.addFavourite = addFavourite;

//search by keyword
const searchResource = function(searchKey){
  return pool.query(`
    SELECT title
    FROM resources
    WHERE title
    LIKE '%$1%';
  `, [searchKey])
  .then(res => res.rows[0]);
}
exports.addFavourite = searchResource;
