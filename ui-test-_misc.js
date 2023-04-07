const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKApropos_Misc', function () {

	const item = {
		OLSKAproposFeedbackValue: Math.random().toString(),
		OLSKAproposShareData: JSON.stringify({
			url: Math.random().toString(),
		}),
	};

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, item);
	});

	describe('OLSKAproposFeedbackButton', function test_OLSKAproposFeedbackButton () {

		it('sets href', function () {
			return browser.assert.attribute(OLSKAproposFeedbackButton, 'href', item.OLSKAproposFeedbackValue);
		});

	});

	describe('OLSKAproposShareButton', function test_OLSKAproposShareButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			return browser.assert.hasClass(OLSKAproposShareButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			return browser.assert.hasClass(OLSKAproposShareButton, 'OLSKDecorTappable');
		});

		context('click', function () {
			
			it('calls navigator.share', async function () {
				browser.assert.deepEqual(await browser.OLSKAlertAsync(function () {
					return browser.pressButton(OLSKAproposShareButton);
				}), item.OLSKAproposShareData);
			});
		
		});
		
	});

});
