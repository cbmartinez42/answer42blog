const router = require('express').Router();
// const Posts = require('../../models/posts');


router.get('/login', async (req, res) => {
  res.render('login')
})

module.exports = router;