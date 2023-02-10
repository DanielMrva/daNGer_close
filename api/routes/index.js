const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('.auth');

router.use('/api', apiRoutes);

router.use('/login', authRoutes);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});


module.exports = router;