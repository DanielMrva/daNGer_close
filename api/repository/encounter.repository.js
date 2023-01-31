const { connect, disconnect } = require('../config/db.config');
const { Encounter } = require('../models/');
const logger = require('../logger/api.logger');

class encounterRepository {

    constructor() {
        connect();
    };

    async getEncounters() {
        const encounters = await Encounter.find({});
        console.log('encounters', encounters);
        return encounters;
    };

    async createEncounter(encounter) {
        let data = {};
        try {
            data = await Encounter.crete(encounter);
        } catch(err) {
            logger.error('Error ' + err)
        }
        return data;
    };

    async updateEncoutner(encounter) {
        let data = {};
        try {
            data = await Encounter.updateOne(encounter);
        } catch(err) {
            logger.error('Error ' + err);
        }
        return data;
    };

    async deleteEncounter(encounterId) {
        let data = {};
        try {
            data = await Encounter.deleteOne({_id: encounterId});
        } catch(err) {
            logger.error('Error: ' + err);
        };
        return {status: `${data.deletedCount > 0 ? true : false}`};
    };

    // TODO: add in the other resolver bits as from CE classic
};

module.exports = new encounterRepository();