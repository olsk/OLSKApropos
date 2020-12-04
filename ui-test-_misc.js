const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKApropos_Misc', function () {

	const item = {
		OLSKAproposFeedbackEmail: Math.random().toString(),
		OLSKAproposShareData: JSON.stringify({
			url: Math.random().toString(),
		}),
	};

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, item);
	});

	describe('OLSKAproposFeedbackButton', function test_OLSKAproposFeedbackButton () {

		it('sets href', function () {
			browser.assert.attribute(OLSKAproposFeedbackButton, 'href', item.OLSKAproposFeedbackEmail);
		});

	});

	describe('OLSKAproposShareButton', function test_OLSKAproposShareButton () {

		it('classes OLSKLayoutButtonNoStyle', function () {
			browser.assert.hasClass(OLSKAproposShareButton, 'OLSKLayoutButtonNoStyle');
		});

		it('classes OLSKLayoutElementTappable', function () {
			browser.assert.hasClass(OLSKAproposShareButton, 'OLSKLayoutElementTappable');
		});

		context('click', function () {
			
			it('calls navigator.share', async function () {
				browser.assert.deepEqual(await browser.OLSKAlertTextAsync(function () {
					return browser.pressButton(OLSKAproposShareButton);
				}), item.OLSKAproposShareData);
			});
		
		});
		
	});

});
