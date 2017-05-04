'use strict';

const express = require('express');
const config = require('../knexfile').production;
const knex = require('knex')(config)

const bodyParser = require('body-parser');

// const { connect } = require('../db/database');

const port = process.env.PORT || 3000;
const app = express();

app.set('port', port);

app.use(express.static('client'));
app.use(bodyParser.json());


// APIs
app.get('/api/getTableOneItems', (req, res) => {
	knex('TableOne')
		.select('*')
		.orderBy('id')
		.then((data) => {
			res.json(data)
		})
})

app.post('/api/addItem', (req, res) => {
	knex('TableOne')
		.insert(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.delete('/api/delItem/:id', (req, res) => {
	knex('TableOne')
		.where('id', req.params.id)
		.del(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.put('/api/editItem/:id', (req, res) => {
	knex('TableOne')
		.where('id', req.params.id)
		.update(req.body)
		.then((data) => {
			res.json(data)
		})
})

var pg = require('pg');
pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

// connect()
// 	.then(() => {
		app.listen(port, () => {
			console.log(`Listening on port: ${port}`);
		});
	// })
	// .catch(console.error)
