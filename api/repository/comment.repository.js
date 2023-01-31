const { connect, disconnect } = require('../config/db.config');
const { Comment } = require('../models/');
const logger = require('../logger/api.logger');

class CommentRespository {

    constructor() {
        connect();
    };

    async getComments() {
        const comments = await Comment.find({});
        console.log('comments: ', comments);
        return comments;
    };

    async createComment(comment) {
        let data = {};
        try {
            data = await Comment.create(comment);
        } catch(err) {
            logger.error('Error: ' + err);
        }
        return data;

    };

    async updateComment(comment) {
        let data = {};
        try {
            data = await Comment.updateOne(comment);
        }catch(err) {
            logger.error('Error: ' + err);
        }
        return data;
    };

    async deleteComment(commentId) {
        let data = {};
        try {
            data = await Comment.deleteOne({_id: commentId });
        } catch(err) {
            logger.error('Error: ' + err);
        };
        return {status: `${data.deletedCount > 0 ? true : false}`};
    };

    // TODO: add in other resolver bits from CE classic
};

module.exports = new CommentRespository();
