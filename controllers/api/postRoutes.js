const router = require('express').Router();
const Posts = require('../../models/posts');


router.post('/', async (req, res) => {
  try {
     const postData = await Posts.create({
      post_name: req.body.post_name,
      post_text: req.body.post_text,
      created_by: null, // need to update this when user auth is working!!!! ---------------------------------------------------------
    })
    res.status(200).json(postData) // or postData?
  } catch (err) {
    res.status(400).json(err);
  }
})


module.exports = router;