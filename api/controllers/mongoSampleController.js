var db = require('monk')('localhost/shanePrototypeMongo');
var helpers = require('../helpers');

module.exports = {
	retrieve: function (req, res) {
		var samples = db.get('users');

		samples.find({},{},function(err, samples){
			if(err){
				res.send(err);
			} else {
				res.send(JSON.stringify(samples));
			}
		});
 	},

 	create: function (req, res) {
		var posts = db.get('users');

		posts.insert({
			"email": req.body.email,
			"name": req.body.name,
			"age": req.body.age,
			"gender": req.body.gender
		}, function(err, post){
			if(err){
				res.send(err);
			} else {
				res.send(req.body);
			}
		});
 	}
}