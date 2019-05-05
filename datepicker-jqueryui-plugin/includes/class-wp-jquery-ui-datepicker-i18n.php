<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://gruseltour-leipzig.de
 * @since      1.0.0
 *
 * @package    Wp_Jquery_Ui_Datepicker
 * @subpackage Wp_Jquery_Ui_Datepicker/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Wp_Jquery_Ui_Datepicker
 * @subpackage Wp_Jquery_Ui_Datepicker/includes
 * @author     Mysterium Tremendum GbR <sebastian@lifeinprogress.de>
 */
class Wp_Jquery_Ui_Datepicker_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'wp-jquery-ui-datepicker',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
