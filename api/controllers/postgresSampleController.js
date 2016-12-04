var pg = require('pg');
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/shane';

module.exports = {
	retrieve: function (req, res) {
		const results = [];
		// Get a Postgres client from the connection pool
		pg.connect(connectionString, (err, client, done) => {
		// Handle connection errors
			if(err) {
			  done();
			  console.log(err);
			  return res.status(500).json({success: false, data: err});
			}
			// SQL Query > Select Data
			const query = client.query('SELECT * FROM items ORDER BY id ASC;');
			// Stream results back one row at a time
			query.on('row', (row) => {
			  results.push(row);
			});
			// After all data is returned, close connection and return results
			query.on('end', () => {
			  done();
			  return res.json(results);
			});
		});
 	},

 	create: function (req, res) {
		const results = [];
		  // Grab data from http request
		  const data = {text: req.body.text, complete: false};
		  // Get a Postgres client from the connection pool
		  pg.connect(connectionString, (err, client, done) => {
		    // Handle connection errors
		    if(err) {
		      done();
		      console.log(err);
		      return res.status(500).json({success: false, data: err});
		    }
		    // SQL Query > Insert Data
		    client.query('INSERT INTO items(text, complete) values($1, $2)',
		    [data.text, data.complete]);
		    // SQL Query > Select Data
		    const query = client.query('SELECT * FROM items ORDER BY id ASC');
		    // Stream results back one row at a time
		    query.on('row', (row) => {
		      results.push(row);
		    });
		    // After all data is returned, close connection and return results
		    query.on('end', () => {
		      done();
		      return res.json(results);
		    });
		  });
 	},

 	delete: function(req, res, next){
 		const results = [];
		// Grab data from the URL parameters
		const id = req.params.todo_id;
		// Get a Postgres client from the connection pool
		pg.connect(connectionString, (err, client, done) => {
			// Handle connection errors
			if(err) {
				done();
				console.log(err);
				return res.status(500).json({success: false, data: err});
			}
			// SQL Query > Delete Data
			client.query('DELETE FROM items WHERE id=($1)', [id]);
			// SQL Query > Select Data
			var query = client.query('SELECT * FROM items ORDER BY id ASC');
			// Stream results back one row at a time
			query.on('row', (row) => {
				results.push(row);
			});
			// After all data is returned, close connection and return results
			query.on('end', () => {
				done();
				return res.json(results);
			});
		});
 	}
}