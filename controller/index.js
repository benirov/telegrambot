'use strict'

const apiTranslate = require('google-translate-api');

function getTranslate(req, res)
{
	console.log(res)
	return res.status(200).send(req.params.string);
}

module.exports = getTranslate;