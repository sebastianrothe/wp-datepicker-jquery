<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://gruseltour-leipzig.de
 * @since             1.0.0
 * @package           Wp_Jquery_Ui_Datepicker
 *
 * @wordpress-plugin
 * Plugin Name:       WP JQueryUI Datepicker
 * Plugin URI:        https://github.com/sebastianrothe
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.2.0
 * Author:            Mysterium Tremendum GbR
 * Author URI:        https://gruseltour-leipzig.de
 * Text Domain:       wp-jquery-ui-datepicker
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'WP_JQUERY_UI_DATEPICKER_VERSION', '1.2.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp-jquery-ui-datepicker-activator.php
 */
function activate_wp_jquery_ui_datepicker() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-jquery-ui-datepicker-activator.php';
	Wp_Jquery_Ui_Datepicker_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp-jquery-ui-datepicker-deactivator.php
 */
function deactivate_wp_jquery_ui_datepicker() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-jquery-ui-datepicker-deactivator.php';
	Wp_Jquery_Ui_Datepicker_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wp_jquery_ui_datepicker' );
register_deactivation_hook( __FILE__, 'deactivate_wp_jquery_ui_datepicker' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wp-jquery-ui-datepicker.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wp_jquery_ui_datepicker() {

	$plugin = new Wp_Jquery_Ui_Datepicker();
	$plugin->run();

}
run_wp_jquery_ui_datepicker();
