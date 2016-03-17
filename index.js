"use strict";

const http = require('http')
const Client = require('node-rest-client').Client
const Promise = require('bluebird')
const _ = require('lodash')
const querystring = require('querystring')

const URL = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&";

let client = new Client();

module.exports = function Quakey(q) {

	const url = URL + querystring.stringify(q);

	return Promise
		.fromCallback(function(done) {
			client.get(url, function(data, res) {
				done(null, data.features || "None")
			})
		})

}


