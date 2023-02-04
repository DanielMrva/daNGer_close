const { encounterRepository } = require('../repository/');

class EncounterService {

    constructor() {};

    async getEncounters() {
        return await encounterRepository.getEncounters();
    };

    async createEncounter(encounter) {
        return await encounterRepository.createEncounter(encounter);
    };

    async updateEncounter(encounter) {
        return await encounterRepository.updateEncounter(encounter);
    };

    async deleteEncounter(encounterId) {
        return await encounterRepository.deleteEncounter(encounterId);
    };

    // TODO: will have to do other query-related functions?...

}

module.exports = new EncounterService();
