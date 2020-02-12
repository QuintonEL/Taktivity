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
    WHERE id = $1;
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
  RETURNING *;
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
    LIMIT 15;
  `, [])
  .then(res => res.rows);
}
exports.getAllResources = getAllResources;

//get all resources for user
const getAllResourcesById = function(creatorId){
  console.log(creatorId)
  return pool.query(`
    SELECT *
    FROM resources
    WHERE creator_id = $1
    LIMIT 100;
  `, [creatorId])
  .then(res => res.rows);
}
exports.getAllResourcesById = getAllResourcesById;

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
  `, [ratings.user_id, ratings.resource_id, ratings.rating])
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

//create resource
const createResources = function(resources){
  return pool.query(`
  INSERT INTO resources (creator_id, title, url, description, image_url)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
  `, [resources.creator_id, resources.title, resources.url, resources.description, resources.image_url])
  .then((res) => {

    console.log(res.rows[0])
    return res.rows[0]
  })
}
exports.createResources = createResources;
