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
