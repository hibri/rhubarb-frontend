var pjson = require('../package.json');



function get(req, res) {

	
		res.send({
			'api': 'ok',
			'version': pjson.version

		});

}

module.exports = get;
