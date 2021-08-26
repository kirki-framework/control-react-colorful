<?php
/**
 * Customizer Control: kirki-react-colorful.
 *
 * @package   kirki-framework/control-react-colorful
 * @copyright Copyright (c) 2019, Ari Stathopoulos (@aristath)
 * @license   https://opensource.org/licenses/MIT
 * @since     1.0
 */

namespace Kirki\Control;

use Kirki\Control\Base;
use Kirki\URL;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * react-colorful control.
 *
 * @since 1.0
 */
class ReactColorful extends Base {

	/**
	 * The control type.
	 *
	 * @access public
	 * @since 1.0
	 * @var string
	 */
	public $type = 'kirki-react-colorful';

	/**
	 * The control version.
	 *
	 * @static
	 * @access public
	 * @since 1.0
	 * @var string
	 */
	public static $control_ver = '1.0';

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 * @since 1.0
	 * @return void
	 */
	public function enqueue() {
		parent::enqueue();

		// Enqueue the script.
		wp_enqueue_script( 'kirki-control-react-colorful', URL::get_from_path( dirname( dirname( __DIR__ ) ) . '/dist/main.js' ), [ 'customize-controls', 'wp-element', 'jquery', 'customize-base', 'kirki-dynamic-control' ], self::$control_ver, false );

		// Enqueue the style.
		wp_enqueue_style( 'kirki-control-react-colorful-style', URL::get_from_path( dirname( __DIR__ ) . '/style.css' ), [], self::$control_ver );
	}

	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @access public
	 * @since 1.0
	 * @see WP_Customize_Control::to_json()
	 * @return void
	 */
	public function to_json() {

		// Get the basics from the parent class.
		parent::to_json();

		// Set the default formComponent value to `RgbaColorPicker`.
		if ( ! isset( $this->json['choices']['formComponent'] ) ) {
			$this->json['choices']['formComponent'] = 'RgbaColorPicker';
		}

		// For backwards-compatibility - In v4, we can just `RgbColorPicker` directly as the value of formComponent.
		if ( isset( $this->json['choices']['alpha'] ) && false === $this->json['choices']['alpha'] ) {
			$this->json['choices']['disableAlpha'] = true;
			$this->json['choices']['formComponent'] = 'RgbColorPicker';
		}

		// ! The react-colorful doesn't support hue-only picker yet.
		if ( isset( $this->json['mode'] ) && 'hue' === $this->json['mode'] ) {
			$this->json['choices']['formComponent'] = 'HslColorPicker';
		}

		$value = isset( $this->json['value'] ) ? $this->json['value'] : '';

		// If value is not a hex color, then change the formComponent.
		if (!empty($value) && false === stripos($value, '#')) {
			if (false !== stripos($value, 'rgba')) {
				$this->json['choices']['formComponent'] = 'RgbaColorPicker';
			} elseif ( false !== stripos( $value, 'rgb' ) ) {
				$this->json['choices']['formComponent'] = 'RgbColorPicker';
			} elseif ( false !== stripos( $value, 'hsla' ) ) {
				$this->json['choices']['formComponent'] = 'HslaColorPicker';
			} elseif ( false !== stripos( $value, 'hsl' ) ) {
				$this->json['choices']['formComponent'] = 'HslColorPicker';
			} elseif ( false !== stripos( $value, 'hsva' ) ) {
				$this->json['choices']['formComponent'] = 'HsvaColorPicker';
			} elseif ( false !== stripos( $value, 'hsv' ) ) {
				$this->json['choices']['formComponent'] = 'HsvColorPicker';
			}
		}
	}

	/**
	 * An Underscore (JS) template for this control's content (but not its container).
	 *
	 * Class variables for this control class are available in the `data` JS object;
	 * export custom variables by overriding {@see WP_Customize_Control::to_json()}.
	 *
	 * @see WP_Customize_Control::print_template()
	 *
	 * @access protected
	 * @since 1.0
	 * @return void
	 */
	protected function content_template() {}
}
