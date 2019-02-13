import App from './components/app'

// Only include at end of main application...
function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(function() {
	// only set dummyData for testing
	var testing = true;

	const app = new App()
	app.init(testing);
	app.renderFooterOnDatepicker();
});
