const router = require('express').Router();
const {Posts, Comments, Users} = require('../../models');
const withAuth = require('../../utils/auth');

// get posts, order by most recent and render home page
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
  
// display individual post and related comments
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

    if (!postsData) {
      res.status(404).json({message: "No post with that ID. Try again"})
      return;
    }

    const post = postsData.get({ plain: true });

    res.render('post-view', {
      ...post, logged_in: req.session.logged_in 
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

// get individual post data and render page to edit
router.get('/edit-post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id)

    if (!postData) {
      res.status(404).json({message: "No post with that ID. Try again"})
      return;
    }

    const post = postData.get({ plain: true });

    res.render('edit-post', {
      ...post, logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

// render page to create a new post
router.get('/new', (req, res) => res.render('new-post', {logged_in: req.session.logged_in} ));

// get posts associated with the logged in user and display on the dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await Users.findByPk(req.session.user_id, {
      attributes: { exclude: ['password']},
        include: [{
        model: Posts, 
        attributes: ['id', 'post_name', 'post_text', 'created_at'],
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

// render logout page
router.get('/logout', (req, res) => res.render('logout', {logged_in: req.session.logged_in}));

// render login/signup page
router.get('/login', (req, res) => res.render('login'));

module.exports = router;