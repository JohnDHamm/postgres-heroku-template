'use strict';

const express = require('express');
const config = require('../knexfile').development
const knex = require('knex')(config)

const bodyParser = require('body-parser');

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



app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});
