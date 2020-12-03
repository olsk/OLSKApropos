<script>
export let OLSKAproposFeedbackEmail = null;

import { OLSKLocalized } from 'OLSKInternational';

const mod = {};
</script>

<div class="OLSKApropos">

{#if OLSKAproposFeedbackEmail }
	<a class="OLSKAproposFeedbackButton" href={ 'mailto:' + OLSKAproposFeedbackEmail }>{ OLSKLocalized('OLSKAproposFeedbackButtonText') }</a>
{/if}

</div>
