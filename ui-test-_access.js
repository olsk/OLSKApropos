const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKApropos: '.OLSKApropos',

	OLSKAproposFeedbackButton: '.OLSKAproposFeedbackButton',

	OLSKAproposShareButton: '.OLSKAproposShareButton',
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

	it('hides OLSKAproposShareButton', function () {
		browser.assert.elements(OLSKAproposShareButton, 0);
	});

	context('OLSKAproposFeedbackValue', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAproposFeedbackValue: Math.random().toString(),
			});
		});

		it('shows OLSKAproposFeedbackButton', function () {
			browser.assert.elements(OLSKAproposFeedbackButton, 1);
		});

	});

	context('OLSKAproposShareData', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAproposShareData: JSON.stringify({}),
			});
		});

		it('shows OLSKAproposShareButton', function () {
			browser.assert.elements(OLSKAproposShareButton, 1);
		});

	});

});
