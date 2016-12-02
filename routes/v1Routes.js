var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require('../api/controllers/');

router.route('/mongoSample/')
	.get(controllers.mongoSampleController.retrieve)
    .post(controllers.mongoSampleController.create);
    


module.exports = router;