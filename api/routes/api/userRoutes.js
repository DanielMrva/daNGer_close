const router = require('express').Router();
const { userController } = require('../../controllers/');

// api/user

router.get('/', (req, res) => {
    userController.getUsers().then(data => res.json(data));
});

router.get('/:id', (req, res) => {
    userController.getSingleUser(req.params.id).then(data => res.json(data));
});

router.post('/', (req, res) => {
    userController.createUser(req.body.user).then(data => res.json(data));
});

router.put('/', (req, res) => {
    userController.updateUser(req.body.user).then(data => res.json(data));
});

router.delete('/:id', (req, res) => {
    userController.deleteUser(req.params.id).then(data => res.json(data));
});

module.exports = router;