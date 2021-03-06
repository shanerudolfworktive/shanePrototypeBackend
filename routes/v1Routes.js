var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require('../api/controllers/');

router.route('/mongoSample/')
	.get(controllers.mongoSampleController.retrieve)
    .post(controllers.mongoSampleController.create);
    
router.route('/postgresSample/')
	.get(controllers.postgresSampleController.retrieve)
    .post(controllers.postgresSampleController.create);

router.route('/postgresSample/:todo_id')
	.put(controllers.postgresSampleController.update)
	.delete(controllers.postgresSampleController.delete);

module.exports = router;