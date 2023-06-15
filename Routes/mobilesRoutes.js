const express = require('express');
const app = express();
const mobilesController = require('../Controllers/mobilesController')
const router = express.Router();

router.param('id', mobilesController.checkId)

const { getAllMobiles, createMobile, getMobile, updateMobile, deleteMobile, validateBody } = mobilesController;

router.route('/')
    .get(getAllMobiles)
    .post(validateBody, createMobile)

router.route('/:id')
    .get(getMobile)
    .patch(updateMobile)
    .delete(deleteMobile)

module.exports = router;