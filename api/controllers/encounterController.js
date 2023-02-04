const { encounterService } = require('../services/');
const logger = require('../logger/api.logger');

class EncounterController {

    async getencounters() {
        logger.info('Controller: getencounters');
        return await encounterService.getEncounters();
    };

    async createencounter(encounter) {
        logger.info('Controller: createencounter', encounter);
        return await encounterService.createEncounter(encounter);
    };

    async updateencounter(encounter) {
        logger.info('Controller: updateencounter', encounter);
        return await encounterService.updateEncounter(encounter);
    };

    async deleteencounter(encounterId) {
        logger.info('Controller: deleteencounter', encounterId);
        return await encounterService.deleteEncounter(encounterId);
    };
};

module.exports = new EncounterController();