const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require('./api/userRoutes')
const thoughtRoutes = require('./api/thoughtRoutes')

router.use('/thought', thoughtRoutes);

router.use('/user', userRoutes);

module.exports = router;
