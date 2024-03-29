const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('OLSKApropos_Localize-' + OLSKRoutingLanguage, function () {

		const item = {
			OLSKRoutingLanguage,
			OLSKAproposFeedbackValue: Math.random().toString(),
			OLSKAproposShareData: JSON.stringify({}),
		};

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, item);
		});
	
		it('localizes OLSKAproposFeedbackButton', function() {
			return browser.assert.text(OLSKAproposFeedbackButton, uLocalized('OLSKAproposFeedbackButtonText'));
		});
	
		it('localizes OLSKAproposShareButton', function() {
			return browser.assert.text(OLSKAproposShareButton, uLocalized('OLSKAproposShareButtonText'));
		});

	});

});
