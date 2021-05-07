const router = require('express').Router();
const Posts = require('../../models/posts');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  try {
     const postData = await Posts.create({
      post_name: req.body.post_name,
      post_text: req.body.post_text,
      created_by: req.session.user_id, // need to update this when user auth is working!!!! ---------------------------------------------------------
    })
    res.status(200).json(postData) // or postData?
  } catch (err) {
    res.status(400).json(err);
  }
})

router.put('/:id', withAuth, async (req, res) => {
  const id = req.params.id;
  try {
    // console.log(req.body)
    const postData = await Posts.update({
      post_name: req.body.post_name,
      post_text: req.body.post_text,
      edited: true,
    }, 
    {
      where: {
        id: req.params.id
      }
    });
    if (!postData) {
      res.status(404).json({message: 'No posts with this ID. Try again.'});
      return;
    }
    window.location.replace(`/dashboard`)
  } catch (err) {
    res.status(500).json(err);
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    postData = await Posts.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(postData)
    if (!postData) {
      res.status(404).json({ message: 'No post with that ID. Are you sure you have the correct towel?'});
      return;
    }
    
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;