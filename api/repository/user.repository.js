const { connect, disconnect } = require("../config/db.config");
const { User } = require("../models/");
const logger = require("../logger/api.logger");

class UserRepository {
    constructor() {
        connect();
    };

    async getUsers() {
        const users = await User.find({});
        console.log("Users:", users);
        return users;
    };

    async getSingleUser(userId) {
        const user = await User.findOne({_id: userId}).populate(["encounters", "comments"]);
        console.log("User:", user);
        return user;
    };

    async createUser(user) {
        let data = {};
        try {
            data = await User.create(user);
        } catch(err) {
            logger.error("Error:" + err);
        }
        return data;
    };

    async updateUser(user) {
        let data = {};
        try {
            data = await User.updateOne({_id: user._id}, {user});
        } catch(err) {
            logger.error("Error:" + err);
        }
        return data;
    };

    async deleteUser(userId) {
        let data = {};
        try {
            data = await User.deleteOne({_id : userId})
        } catch(err) {
            logger.error("Error:" +err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    };
};

module.exports = new UserRepository();