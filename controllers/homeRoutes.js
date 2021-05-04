const router = require('express').Router();
const {Posts, Comments, Users} = require('../models');


router.get('/', async (req, res) => {
  try {
  const postsData = await Posts.findAll({
    include: [
      {
        model: Users, 
        attributes: ['username']
      },
      {
        model: Comments,
        include: [{model: Users}],
        attributes: ['comment_text', 'created_by']
      }
    ]
  })

  const posts = postsData.map((posts) =>
  posts.get({plain:true})
 
  );
  console.log('posts >>>>>', JSON.stringify(posts, null, 2))  // , comments, users
  res.render('home', {posts});
} catch (err) {
  console.log(err);
  res.status(500).json(err)
}
})
  

router.get('/login', async (req, res) => {
  res.render('login')
})


module.exports = router;