'use strict'

const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const translate = require('google-translate-api');
// const api = require('./route');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
// app.use('/api', api);
app.post('/translate/', (req, res) =>
{
	let message = req.body.data;
	translate(message, {from: 'es', to: 'en'})
  	.then(response =>
    {
    	
       res.status(200).send({response});
    });

    
});

app.get('/translate/:string', (req, res) =>
{
	let message = req.params;
	console.log(req.params);
	translate(message, {from: 'es', to: 'en'})
  	.then(response =>
    {
    	
       res.status(200).send({response});
    });

    
});

app.listen(config.port, () =>
{
	console.log(`API REST Corriendo en http://localhost:${config.port}`);
});