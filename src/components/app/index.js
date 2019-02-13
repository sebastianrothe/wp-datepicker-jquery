/*import Util from '../services/util'
import Provider from '../services/dataprovider'
import Availability from '../services/availability'*/

import './style.css'

export default class App {
	constructor(config) {
		this.config = config || {}
	}

	init() {
	  	console.log(this.config.testing)
	}

	// augment the jQuery Datepicker with a footer
	renderFooterOnDatepicker() {
		
	}
}
