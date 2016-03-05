"use strict";

const http = require('http')
const Client = require('node-rest-client').Client
const Promise = require('bluebird')
const _ = require('lodash')

const URL = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

let client = new Client();

module.exports = function Quakey(q) {

	// Default Query
	const query = _.defaults(q, {
		magnitude: false,
		time: false,
		location: false,
		radius: false,
	});

	function url() {

		// Magnitude
		let magnitude = "&minmagnitude=" + query.magnitude;
		// Time
		let time = query.time ? "&endtime&startime=" + query.time : "";
		// Location
		let location = query.location ? "&latitude="+ query.location[0] + "&longitude=" + query.location[1] : "";
		// Radius
		let radius = query.radius ? ("&maxradiuskm=" + query.radius) : "";

		// URL
		return URL + time + magnitude + radius;
	}

	return Promise
		.fromCallback(function(done) {
			client.get(url(), function(data, res) {
				done(null, data.features || "None")
			})
		})

}


