const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKApropos: '.OLSKApropos',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKApropos_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKApropos', function () {
		browser.assert.elements(OLSKApropos, 1);
	});

});
