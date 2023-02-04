const router = require('express').Router();
const userRoutes = require('./userRoutes');
const encounterRoutes = require('./encounterRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/encounter', encounterRoutes);
router.use('/comment', commentRoutes);

module.exports = router;