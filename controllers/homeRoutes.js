const router = require('express').Router();
const {Posts, Comments} = require('../models');


router.get('/', async (req, res) => {
  try {
  const postsData = await Posts.findAll({
    include: [
      {
        model: Comments,
        attributes: ['comment_text', 'created_by']
      }
    ]
  })

  const posts = postsData.map((posts) =>
  posts.get({plain:true})
  );

  res.render('home', {posts});
} catch (err) {
  console.log(err);
  res.status(500).json(err)
}
})
  
module.exports = router;