const commentService = require('../service/commentService');
const logger = require('../logger/api.logger');

class CommentController {

    async getcomments() {
        logger.info('Controller: getcomments');
        return await commentService.getComments();
    };

    async createcomment(comment) {
        logger.info('Controller: createcomment', comment);
        return await commentService.createComment();
    };

    async updatecomment(comment) {
        logger.info('Controller: updatecomment', comment);
        return await commentService.updateComment(comment);
    };

    async deletecomment(commentId) {
        logger.info('Controller: deletecomment', commentId);
        return await commentService.deleteComment(commentId);
    };
};

module.exports = new CommentController();