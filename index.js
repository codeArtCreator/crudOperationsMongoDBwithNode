const express = require('express');
const fs = require('fs');
const mobilesRouter = require('./Routes/mobilesRoutes')

const app = express();
app.use(express.json());

//
app.use('/api/v1/mobiles',mobilesRouter)

module.exports = app