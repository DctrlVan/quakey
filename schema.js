module.exports = {
	// Parameter Reference:
	// http://earthquake.usgs.gov/fdsnws/event/1/#methods
	
	"title": "USGS Query Schema",
	"type": "object",
	"properties": {
		// Time
		"endtime": {
			"type": "string"
		},
		"starttime": {
			"type": "string"
		},
		"updatedafter": {
			"type": "string",
		},

		// Location
		// Rectangle
		"minlatitude": {
			"type": "decimal",
			"max":90,
			"min":-90,
		},
		"minlongitude": {
			"type": "decimal",
			"max":360,
			"min":-360,
		},
		"maxlatitude": {
			"type": "decimal",
			"max":90,
			"min":-90,
		},
		"maxlongitude": {
			"type": "decimal",
			"max":360,
			"min":-360,
		},

		// Circle
		"latitude": {
			"type": "decimal",
			"max": 90,
			"min": -90
		},
		"longitude": {
			"type": "decimal",
			"max": 180,
			"min": -180
		},
		"maxradius": {
			"type": "decimal",
			"max": 180,
			"min": 0
		},
		"maxradiuskm": {
			"type": "decimal",
			"max": 20001.6,
			"min": 0
		},

		// Other
		"catalog": {
			"type": "string"
		},
		"contributor": {
			"type": "string"
		},
		"eventid": {
			"type": "string"
		},
		"includeallmagnitudes": {
			"type": "string"
		},
		// ...

		// Extensions:
		"alertlevel": {
			"enum":[
				"green",
				"yellow",
				"orange",
				"red"
			] 
		}
	}
}