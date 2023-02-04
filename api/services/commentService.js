
const { commentRepository } = require('../repository/');

class CommentService {

    constructor() {};

    async getComments() {
        return await commentRepository.getComments();
    };

    async createComment(comment) {
        return await commentRepository.createComment(comment);
    };

    async updateComment(comment) {
        return await commentRepository.updateComment(comment);
    };

    async deleteComment(commentId) {
        return await commentRepository.deleteComment(commentId);
    };

    // TODO: will have to do other query-related functions?...

}

module.exports = new CommentService();