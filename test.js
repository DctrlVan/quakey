const quakey = require('./index.js')

quakey({
	magnitude:5,
	time:0,
}).then(function(data) {
	console.log(data)
})