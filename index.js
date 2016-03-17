"use strict";

const http = require('http')
const Client = require('node-rest-client').Client
const Promise = require('bluebird')
const _ = require('lodash')
const querystring = require('querystring')
const tv4 = require('tv4')

const URL = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&";
const SCHEMA = require('./schema')

let client = new Client();

module.exports = function Quakey(data) {

	return Promise
		.try(function() {
			var result = tv4.validateMultiple(data, SCHEMA);
			return !result ? data : Error(tv4.error);
		})
		.then(function() {

			const url = URL + querystring.stringify(data);

			return Promise.fromCallback(function(done) {
				client.get(url, function(data, res) {
					done(null, data.features || "None")
				})
			})
		})

}


