const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`OLSKApropos_Localize-${ OLSKRoutingLanguage }`, function () {

		const item = {
			OLSKRoutingLanguage,
			OLSKAproposFeedbackEmail: Math.random().toString(),
			OLSKAproposShareData: JSON.stringify({}),
		};

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, item);
		});
	
		it('localizes OLSKAproposFeedbackButton', function() {
			browser.assert.text(OLSKAproposFeedbackButton, uLocalized('OLSKAproposFeedbackButtonText'));
		});
	
		it('localizes OLSKAproposShareButton', function() {
			browser.assert.text(OLSKAproposShareButton, uLocalized('OLSKAproposShareButtonText'));
		});

	});

});
