const router = require('express').Router();
const Comments = require('../../models/comments');


router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const commentData = await Comments.create({
    comment_text: req.body.comment_text,
    created_by: req.session.user_id, // need to update this when user auth is working!!!! ---------------------------------------------------------
    })
    
    res.status(200).json(commentData) // or postData?
  } catch (err) {
    res.status(400).json(err);
  }
})


module.exports = router;