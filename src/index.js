import App from './components/app'
import config from './config'
import ready from './helper/ready'

ready(function() {
	const app = new App(config)
	app.init();
	app.renderFooterOnDatepicker();
});
