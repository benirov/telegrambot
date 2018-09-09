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
	console.log("post")
  let idioma =  req.body.type;
  let translate = 'es';
  if(idioma == 'es')
  {
    translate = 'en'
  }
	// console.log(req.body.data)
	let message = req.body.data;
	translate(message, {from: idioma, to: translate})
  	.then(response =>
    {
    	console.log(response);
       res.status(200).send({response});
    });

    
});

app.get('/translate/:string', (req, res) =>
{
	console.log("get")
	let message = req.params;
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