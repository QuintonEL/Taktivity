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
const getAllResources = function () {
  console.log("IN THE RESOURCE");
  let resourceArray;
  return pool.query(`
    SELECT *
    FROM resources
    LIMIT 100;
  `, [])
    .then(async (res) => {
      resourceArray = res.rows;// this is the array of resources.
      for(let i = 0; i < resourceArray.length; i++) {
        console.log(i);
        console.log("RESOURCE ELEMENT", resourceArray[i]);
        resourceArray[i].commentsArray = await pool.query(`
          SELECT * FROM comments
          WHERE comments.resource_id = $1
        `,[resourceArray[i].id])
        resourceArray[i].commentsArray = resourceArray[i].commentsArray.rows;
      }
      return resourceArray
    })
    .then((res) => {
      console.log("BEFORE RETURN");
      console.log("RESOURCE ARRAY ", res);
      return res;
    });

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

//get all resources by resource_id
const getAllResourcesByResourceId = function(resourceId){
  return pool.query(`
    SELECT *
    FROM resources
    WHERE id IN (  SELECT resource_id
      FROM favourites
      WHERE user_id = $1
      LIMIT 100)
    LIMIT 100;
  `, [resourceId])
  .then(res => res.rows);
}
exports.getAllResourcesByResourceId = getAllResourcesByResourceId;

//add a comment
const addComment = function (comment) {
  let date = new Date().toISOString();
  return pool.query(`
  INSERT INTO comments (resource_id, user_id, text, created_at)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`, [comment.comment_post_ID, comment.user_id, comment.comment, date])
  .then(res => res.rows[0]);
}
exports.addComment = addComment;

//get comment for specific post
const getCommentsById = function(id){
  return pool.query(`
  SELECT *
  FROM comments
  WHERE user_id = $1
  LIMIT 100;
  `[id])
  .then(res => res.rows);
}
exports.getCommentsById = getCommentsById;


//add a rating
const addRating = function(ratings){
  return pool.query(`
    INSERT INTO ratings (user_id, resource_id, rating)
    VALUES ($1, $2, $3)
    RETURNING *;
  `, [ratings.user_id, ratings.resource_id, ratings.rating])
  .then(res => res.rows[0]);
}
exports.addRating = addRating;

//add a favourite
const addFavourite = function(favourites){
  return pool.query(`
    INSERT INTO favourites (user_id, resource_id)
    VALUES ($1, $2)
    RETURNING *;
  `, [favourites.user_id, favourites.resource_id])
  .then(res => res.rows[0]);
}
exports.addFavourite = addFavourite;

//get all user favourites
const getFavourites = function(user_id) {
  console.log('getting favourites for', user_id)
  return pool.query(`
  SELECT resource_id
  FROM favourites
  WHERE user_id = $1
  LIMIT 100;
  `, [user_id])
  .then(res => res.rows);
}
exports.getFavourites = getFavourites;

//create resource
const createResources = function(resources){
  return pool.query(`
  INSERT INTO resources (creator_id, title, url, description, image_url, topic)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
  `, [resources.creator_id, resources.title, resources.url, resources.description, resources.image_url, resources.topic])
  .then((res) => {

    console.log(res.rows[0])
    return res.rows[0]
  })
}
exports.createResources = createResources;

