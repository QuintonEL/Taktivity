const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = (database) => {
router.post('/new', (req, res) => {
  let newResourceData = req.body;
  newResourceData.creator_id = req.session.userId;
  console.log(newResourceData)
  database.createResources(newResourceData)
    .then(data => {

    })
    .catch(err => {
      res.status(500)
      res.json({ error: err.message });
    })

})



return router;
}
