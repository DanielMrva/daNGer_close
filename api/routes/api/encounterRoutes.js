const router = require('express').Router();
const encounterController = require('../../controllers/encounterController');

// api/encounter

router.get('/', (req, res) => {
    encounterController.getEncounters().then(data => res.json(data));
});

router.post('/', (req, res) => {
    encounterController.createEncounter(req.body.encounter).then(data => res.json(data));
});

router.put('/', (req, res) => {
    encounterController.updateEncounter(req.body.encounter).then(data => res.json(data));
});

router.delete('/:id', (req, res) => {
    encounterController.deleteEncounter(req.params.id).then(data => res.json(data));
});