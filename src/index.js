import App from './components/app'
import config from './config'

// Only include at end of main application...
function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(function() {
	const app = new App(config)
	app.init();
	app.renderFooterOnDatepicker();
});
