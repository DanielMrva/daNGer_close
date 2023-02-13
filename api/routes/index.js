const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require('./userRoutes');

router.use('/api', apiRoutes);

router.use('/user', userRoutes);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});


module.exports = router;