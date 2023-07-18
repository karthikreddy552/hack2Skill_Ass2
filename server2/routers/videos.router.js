const express = require('express');
const { getVideo } = require('../controller/videos.controller');


const videoRouter = express.Router();

videoRouter.get("/videos", getVideo)

module.exports = videoRouter;