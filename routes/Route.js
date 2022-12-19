const express = require("express")
const router = express.Router();
const fs = require('fs');
const urlsRoutes=require('./Urls')//import urls route
router.use(urlsRoutes)//use urlsRoute


module.exports = router;