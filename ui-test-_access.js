const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKApropos: '.OLSKApropos',

	OLSKAproposFeedbackButton: '.OLSKAproposFeedbackButton',
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

	it('hides OLSKAproposFeedbackButton', function () {
		browser.assert.elements(OLSKAproposFeedbackButton, 0);
	});

	context('OLSKAproposFeedbackEmail', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAproposFeedbackEmail: Math.random().toString(),
			});
		});

		it('shows OLSKAproposFeedbackButton', function () {
			browser.assert.elements(OLSKAproposFeedbackButton, 1);
		});

	});

});
