const router = require('express').Router();
const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/user', userRoutes);
router.use('/students', studentRoutes);
router.use('/thoughts', thoughtRoutes)

module.exports = router;
