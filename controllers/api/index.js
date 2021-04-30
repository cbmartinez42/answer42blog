const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');
const signInRoutes = require('./signInRoutes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/', homeRoutes);
router.use('/sign-in', signInRoutes);

module.exports = router;