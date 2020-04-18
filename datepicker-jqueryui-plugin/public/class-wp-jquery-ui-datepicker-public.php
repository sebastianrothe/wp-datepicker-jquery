<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://gruseltour-leipzig.de
 * @since      1.0.0
 *
 * @package    Wp_Jquery_Ui_Datepicker
 * @subpackage Wp_Jquery_Ui_Datepicker/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Wp_Jquery_Ui_Datepicker
 * @subpackage Wp_Jquery_Ui_Datepicker/public
 * @author     Mysterium Tremendum GbR <sebastian@lifeinprogress.de>
 */
class Wp_Jquery_Ui_Datepicker_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Wp_Jquery_Ui_Datepicker_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Wp_Jquery_Ui_Datepicker_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

    if (!$this->isOnPage()) {
      return;
    }

    wp_enqueue_style('jquery-ui-theme', plugin_dir_url( __FILE__ ) . 'css/jquery-ui-custom.min.css', false, '1.12.1-custom', 'all' );

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/datepicker-jqueryui-plugin-'.$this->version.'.css', array('jquery-ui-theme'), null, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Wp_Jquery_Ui_Datepicker_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Wp_Jquery_Ui_Datepicker_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

    if (!$this->isOnPage()) {
      return;
    }

    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.5.0.min.js', false, '3.5.0', true );

    wp_enqueue_script('jquery-ui', plugin_dir_url( __FILE__ ) . 'js/jquery-ui-custom.min.js', ['jquery'], '1.12.1-custom', true );

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/datepicker-jqueryui-plugin-'.$this->version.'.js', [
    'jquery-ui'], $this->version, true );

  }

  private function isOnPage() {
    return is_front_page();
  }

}
