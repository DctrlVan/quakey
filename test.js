const quakey = require('./index.js')

quakey({
	minmagnitude:7,
}).then(function(data) {
	console.log(data)
})