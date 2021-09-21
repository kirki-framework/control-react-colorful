# kirki-framework/control-react-colorful

This is a simple control for the WordPress Customizer using [react-colorful](https://github.com/omgovich/react-colorful).
Inspired by [Gutenberg change](https://github.com/WordPress/gutenberg/pull/33714), we decided to use _react-colorful_ instead of _react-color_ for Kirki 4.
It has simpler interface and [much smaller bundle size](https://github.com/omgovich/react-colorful#why-react-colorful).

## Installation

To install this package use `composer`:

```bash
composer require kirki-framework/control-react-colorful:dev-nightly
```

**NOTE**:
If you get errors with the package dependencies, please run the following first:

```bash
composer require kirki-framework/control-base:dev-nightly
composer require kirki-framework/field:dev-master
composer require kirki-framework/url-getter:dev-nightly
```

Until Kirki v4.0 is released some of these dependencies may not have a tag released, so in the meantime the above will allow you to install and use everything.

## Usage

This package contains the control itself, as well as a simplified API for the WordPress Customizer, installed via the composer dependencies system.

### Using the simplified API

```php
new \Kirki\Field\ReactColorful( [
	'settings'    => 'my_control_setting_id',
	'label'       => esc_html__( 'My Color Control', 'textdomain' ),
	'description' => esc_html__( 'A description here.', 'kirki' ),
	'section'     => 'my_section_id',
	'default'     => '#ff0000',
	'choices'     => [
		'formComponent' => 'HexColorPicker',
	],
] );
```

### Using the Customizer API

```php
/**
 * Add Customizer settings & controls.
 *
 * @since 1.0
 * @param WP_Customize_Manager $wp_customize The WP_Customize_Manager object.
 * @return void
 */
add_action( 'customize_register', function( $wp_customize ) {

    // Add setting.
	$wp_customize->add_setting( 'my_control_setting_id', [
		'type'              => 'theme_mod',
		'capability'        => 'edit_theme_options',
		'default'           => '#0000ff',
		'transport'         => 'refresh', // Or postMessage.
		'sanitize_callback' => [ '\kirki\Field\Color', 'sanitize' ], // Or a custom sanitization callback.
	] );

    // Add control.
	$wp_customize->add_control( new \Kirki\Control\ReactColorful( $wp_customize, 'my_control_setting_id', [
		'label'       => esc_html__( 'My Color Control', 'textdomain' ),
		'description' => esc_html__( 'A description here.', 'kirki' ),
		'section'     => 'my_section_id',
		'choices'     => [
			'formComponent' => 'HexColorPicker',
		],
	] ) );
} );
```

## Supported Color Models

You can pass arguments to the `react-colorful` component using the `choices` argument in the control.
The only **required** argument here is `formComponent`.

And in the `formComponent` argument you can define the type of control you want, using one of the the following:

- `HexColorPicker`
- `RgbColorPicker`
- `RgbStringColorPicker`
- `RgbaColorPicker`
- `RgbaStringColorPicker`
- `HslColorPicker`
- `HslStringColorPicker`
- `HslaColorPicker`
- `HslaStringColorPicker`
- `HsvColorPicker`
- `HsvStringColorPicker`
- `HsvaColorPicker`
- `HsvaStringColorPicker`

Their value will be saved either as an array or as a string in database (depends on `formComponent` value).
For information about the arguments you can use, please refer to the [react-colorful](https://github.com/omgovich/react-colorful/) documentation.

## Development

If you want to make changes to this control, you can edit the JS files in the `src` folder. Once done editing you can update the compiled script by running the following:

```bash
npm install
npm run build
```
