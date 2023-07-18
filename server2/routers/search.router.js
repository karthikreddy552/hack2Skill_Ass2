const express = require('express');
const searchVideo = require('../controller/search.controller');



const searchRouter = express.Router();

searchRouter.get("/search", searchVideo)

module.exports = searchRouter;