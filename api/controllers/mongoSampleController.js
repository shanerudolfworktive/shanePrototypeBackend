var db = require('monk')('localhost/shanePrototypeMongo');

module.exports = {
	retrieve: function (req, res) {
		var samples = db.get('samples');

		samples.find({},{},function(err, samples){
			if(err){
				res.send(err);
			} else {
				res.send(JSON.stringify(samples));
			}
		});
 	},

 	create: function (req, res) {
		var posts = db.get('samples');

		posts.insert({
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