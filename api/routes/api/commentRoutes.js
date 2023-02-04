const router = require('express').Router();
const { commentController } = require('../../controllers/');

// api/comment

router.get('/', (req, res) => {
    commentController.getComments().then(data => res.json(data));
});

router.post('/', (req, res) => {
    commentController.createComment(req.body.comment).then(data => res.json(data));
});

router.put('/', (req, res) => {
    commentController.updateComment(req.body.comment).then(data => res.json(data));
});

router.delete('/:id', (req, res) => {
    commentController.deleteComment(req.params.id).then(data => res.json(data));
});

module.exports = router;