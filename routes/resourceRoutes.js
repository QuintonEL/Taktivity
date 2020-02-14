const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = (database) => {
  // appends new post to the main page
  router.post('/new', (req, res) => {
    let newResourceData = req.body;
    console.log('newresource', newResourceData)
    newResourceData.creator_id = req.session.userId;
    console.log('CREATORID',newResourceData.creator_id)
    database.createResources(newResourceData)
      .then(data => {
        res.redirect('/api/resources/myResources');
      })
      .catch(err => {
        res.status(500)
        res.json({ error: err.message });
      })
  })

  router.get('/myResources', (req, res) => {


    let postOwner = req.session.userId
    if (!postOwner) {
      res.redirect('/')
    }

    database.getAllResourcesById(postOwner)
      .then(data => {
        database.getUserById(postOwner)
        .then(userInfo => {
          database.getFavourites(postOwner)
          .then(favs => {
            //convert to array
            let favArr = [];
            favs.forEach(element => favArr.push(Number(element.resource_id)))
            favArr = [9]
            database.getAllResourcesByResourceId(postOwner)
            .then(favourites => {
              console.log(favourites)
              res.render("myResources", { postOwner, data, userInfo, favourites });
            })
          })
        })
      })
      .catch(err => {
        res.status(500)
        res.json({ error: err.message });
      })
  })

  //path for favouriting a post
  router.post('/myResources', (req,res) => {
    console.log('made ittt', req.body.resource_id)
    console.log('user', req.session.userId)
    const user_id = req.session.userId;
    const resource_id = Number(req.body.resource_id);
    const favouriteResource = { user_id, resource_id };
    console.log(favouriteResource)
    database.addFavourite(favouriteResource)
  })


return router;
}
