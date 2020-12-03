const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKApropos_Misc', function () {

	const item = {
	};

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, item);
	});


});
