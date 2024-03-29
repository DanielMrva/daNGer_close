const { userRepository } = require('../repository/');

class UserService {

    constructor() {};

    async getUsers() {
        return await userRepository.getUsers();
    };

    async getSingleUser(userId) {
        return await userRepository.getSingleUser(userId);
    };

    async createUser(user) {
        return await userRepository.createUser(user);
    };

    async updateUser(user) {
        return await userRepository.updateUser(user);
    };

    async deleteUser(userId) {
        return await userRepository.deleteUser(userId);
    };

    // TODO: will have to do other query-related functions?...
}

module.exports = new UserService();
