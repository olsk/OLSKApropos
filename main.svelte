<script>
export let OLSKAproposFeedbackEmail = null;
export let OLSKAproposShareData = null;

import { OLSKLocalized } from 'OLSKInternational';
import { OLSK_SPEC_UI } from 'OLSKSpec';

const mod = {

	// INTERFACE

	InterfaceShareButtonDidClick () {
		if (OLSK_SPEC_UI()) {
			return window.alert(JSON.stringify(OLSKAproposShareData))
		}

		navigator.share(OLSKAproposShareData);
	},

};
</script>

<div class="OLSKApropos">

{#if OLSKAproposFeedbackEmail }
	<a class="OLSKAproposFeedbackButton" href={ 'mailto:' + OLSKAproposFeedbackEmail }>{ OLSKLocalized('OLSKAproposFeedbackButtonText') }</a>
{/if}

{#if OLSKAproposShareData }
	<button class="OLSKAproposShareButton OLSKLayoutButtonNoStyle OLSKLayoutElementTappable" on:click={ mod.InterfaceShareButtonDidClick }>{ OLSKLocalized('OLSKAproposShareButtonText') }</button>
{/if}

</div>

<style>
.OLSKApropos {
	padding-top: 32px;

	background: #f5f7fa;
	font-family: Arial, sans-serif;
	font-size: 11pt;

	--OLSKAproposBorder: 1px solid #e8e8e8;

	/* @OLSKAproposFlexbox:Parent */
	display: flex;
	flex-direction: column;
}

.OLSKApropos * {
	display: block;
	padding: 16px;
	border-bottom: var(--OLSKAproposBorder);

	background: white;
	text-align: left;
}

.OLSKApropos *:first-child {
	border-top: var(--OLSKAproposBorder);
}

.OLSKAproposFeedbackButton {
	color: inherit;
	text-decoration: none;
}
</style>
