const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/login', loginRoutes);
router.use('/comment', commentRoutes);

module.exports = router;