const quakey = require('../index.js')

describe("Simple Query", function() {

	it("should query", function() {
		return quakey({
			minmagnitude:5,
		})
	})
})