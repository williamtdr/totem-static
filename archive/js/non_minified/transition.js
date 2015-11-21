function readyAnimations() {
	$(".animsition").animsition({
		inClass: 'zoom-in-sm',
		outClass: 'fade-out-down',
		inDuration: 800,
		outDuration: 500,
		linkElement: '.animsition-link',
		loading: true,
		loadingParentElement: 'body',
		loadingClass: 'animsition-loading',
		unSupportCss: ['animation-duration',
			'-webkit-animation-duration',
			'-o-animation-duration'
		],
		overlay: false,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body'
	});
}

$(document).ready(function () {
	readyAnimations();
});