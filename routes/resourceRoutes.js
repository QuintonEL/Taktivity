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
    console.log('YOU ARE IN myResources')

    let postOwner = req.session.userId
    if (!postOwner) {
      res.redirect('/')
    }

    database.getAllResourcesById(postOwner)
      .then(data => {
        database.getUserById(postOwner)
        .then(userInfo => {
          res.render("myResources", { postOwner, data, userInfo });
        })
      })
      .catch(err => {
        res.status(500)
        res.json({ error: err.message });
      })
  })
return router;
}
