const express = require('express');
const app = express();
const mobilesController = require('../Controllers/mobilesController')
const router = express.Router();

const {getAllMobiles, createMobile,getMobile,updateMobile,deleteMobile} = mobilesController;

router.route('/')
    .get(getAllMobiles)
    .post(createMobile)

router.route('/:id')
    .get(getMobile)
    .patch(updateMobile)
    .delete(deleteMobile)

module.exports = router;