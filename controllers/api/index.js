const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/login', loginRoutes);

module.exports = router;