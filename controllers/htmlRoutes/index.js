const router = require('express').Router();
const {Posts, Comments, Users} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {
  const postsData = await Posts.findAll({
    // limit: 20, not needed since this is such a small site
    order: [['updated_at', 'DESC']],
    include: [
      {
        model: Users, 
        attributes: ['username']
      },

    ]
  });

  const posts = postsData.map((posts) =>
  posts.get({plain:true})
 
  );
  res.render('home', {posts, logged_in: req.session.logged_in });
} catch (err) {
  res.status(500).json(err)
}
});
  

router.get('/post/:id', async (req, res)=> {
  try {
    const postsData = await Posts.findByPk(req.params.id, {
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
    });

    const post = postsData.get({ plain: true });

    res.render('post-view', {
      ...post, logged_in: req.session.logged_in 
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/new', (req, res) => res.render('new-post', {logged_in: req.session.logged_in} ));

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await Users.findByPk(req.session.user_id, {
      attributes: { exclude: ['password']},
      include: [{
        model: Posts, 
        attributes: ['post_name', 'post_text']
      }],
    });
    const user = userData.get({plain: true});

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});






router.get('/logout', (req, res) => res.render('logout', {logged_in: req.session.logged_in}));

router.get('/login', (req, res) => res.render('login'));

module.exports = router;