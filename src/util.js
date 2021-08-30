import { colord } from "colord";

/**
 * Utility functions to convert color for both the picker and the input.
 *
 * Note: Seems like CSS doesn't support "hsv" and "hsva" yet.
 * But let's keep them here for parsing purpose in case they are supported.
 *
 * @see https://discourse.wicg.io/t/hsv-and-hcg-color-models/1572/3
 */
const util = {
	convertColor: {}
};

/**
 * Convert the value for the color picker.
 *
 * @param {string|Object} value The value to be converted.
 * @param {string} pickerComponent The picker component name.
 *
 * @returns {string|Object} The converted value.
 */
util.convertColor.forPicker = (value, pickerComponent , opts = {}) => {
	let convertedValue;

	switch (pickerComponent) {
		case 'HexColorPicker':
			convertedValue = colord(value).toHex();
			break;

		case 'RgbColorPicker':
			convertedValue = colord(value).toRgb();
			break;

		case 'RgbStringColorPicker':
			convertedValue = colord(value).toRgbString();
			break;

		case 'RgbaColorPicker':
			convertedValue = colord(value).toRgb();
			break;

		case 'RgbaStringColorPicker':
			convertedValue = colord(value).toRgbString();

			// Force to show the alpha channel value.
			if (convertedValue.includes('rgb') && !convertedValue.includes('rgba')) {
				convertedValue = convertedValue.replace('rgb', 'rgba');
				convertedValue = convertedValue.replace(')', ', 1)');
			}

			break;

		case 'HslColorPicker':
			convertedValue = colord(value).toHsl();
			break;

		case 'HslStringColorPicker':
			convertedValue = colord(value).toHslString();
			break;

		case 'HslaColorPicker':
			convertedValue = colord(value).toHsl();
			break;

		case 'HslaStringColorPicker':
			convertedValue = colord(value).toHslString();

			// Force to show the alpha channel value.
			if (convertedValue.includes('hsl') && !convertedValue.includes('hsla')) {
				convertedValue = convertedValue.replace('hsl', 'hsla');
				convertedValue = convertedValue.replace(')', ', 1)');
			}

			break;

		case 'HsvColorPicker':
			convertedValue = colord(value).toHsv();
			break;

		case 'HsvStringColorPicker':
			const hsv = colord(value).toHsv();
			convertedValue = 'hsv(' + hsv.h + ', ' + hsv.s + '%, ' + hsv.v + '%)';

			break;

		case 'HsvaColorPicker':
			convertedValue = colord(value).toHsv();
			break;

		case 'HsvaStringColorPicker':
			// colord library doesn't provide .toHsvString() method yet.
			const hsva = colord(value).toHsv();
			convertedValue = 'hsva(' + hsva.h + ', ' + hsva.s + '%, ' + hsva.v + '%, ' + hsva.a + ')';

			break;

		default:
			convertedValue = colord(value).toHex();
			break;
	}

	return convertedValue;
};

/**
 * Convert the value for the color input.
 *
 * @param {string|Object} value The value to be converted.
 * @param {string} pickerComponent The picker component name.
 *
 * @returns {string} The converted value.
 */
util.convertColor.forInput = (value, pickerComponent, opts = {}) => {
	let hsv;
	let hsva;
	let convertedValue;

	switch (pickerComponent) {
		/**
		 * The HexColorPicker is used by these condition:
		 * 1. When formComponent is defined with HexColorPicker as the value.
		 * 2. When formComponent is not defined but the "alpha" choice is not set or set to false (the old way).
		 */
		case 'HexColorPicker':
			convertedValue = colord(value).toHex();
			break;

		case 'RgbColorPicker':
			convertedValue = colord(value).toRgbString();
			break;

		case 'RgbStringColorPicker':
			convertedValue = colord(value).toRgbString();
			break;

		/**
		 * The RgbaColorPicker is used by these condition:
		 * 1. When formComponent is defined with RgbaColorPicker as the value.
		 * 2. When formComponent is not defined but the "alpha" choice is set to true (the old way).
		 */
		case 'RgbaColorPicker':
			const rgba = colord(value).toRgb();

			if (rgba.a < 1) {
				convertedValue = colord(value).toRgbString();
			} else {
				// When it uses the 2nd condition above, then the expected value is "hex".
				if (!opts.formComponent) {
					convertedValue = colord(value).toHex();
				} else {
					convertedValue = colord(value).toRgbString();

					// Force to show the alpha value.
					if (convertedValue.includes('rgb') && !convertedValue.includes('rgba')) {
						convertedValue = convertedValue.replace('rgb', 'rgba');
						convertedValue = convertedValue.replace(')', ', 1)');
					}
				}
			}

			break;

		case 'RgbaStringColorPicker':
			convertedValue = colord(value).toRgbString();

			// Force to show the alpha value.
			if (convertedValue.includes('rgb') && !convertedValue.includes('rgba')) {
				convertedValue = convertedValue.replace('rgb', 'rgba');
				convertedValue = convertedValue.replace(')', ', 1)');
			}

			break;

		case 'HslColorPicker':
			convertedValue = colord(value).toHslString();
			break;

		case 'HslStringColorPicker':
			convertedValue = colord(value).toHslString();
			break;

		case 'HslaColorPicker':
			convertedValue = colord(value).toHslString();

			// Force to show the alpha value.
			if (convertedValue.includes('hsl') && !convertedValue.includes('hsla')) {
				convertedValue = convertedValue.replace('hsl', 'hsla');
				convertedValue = convertedValue.replace(')', ', 1)');
			}

			break;

		case 'HslaStringColorPicker':
			convertedValue = colord(value).toHslString();

			// Force to show the alpha value.
			if (convertedValue.includes('hsl') && !convertedValue.includes('hsla')) {
				convertedValue = convertedValue.replace('hsl', 'hsla');
				convertedValue = convertedValue.replace(')', ', 1)');
			}

			break;

		/**
		 * The colord library doesn't provide .toHsvString() method yet.
		 * This manual value-building will apply to "hsv" and "hsva" stuff below.
		 */
		case 'HsvColorPicker':
			hsv = colord(value).toHsv();
			convertedValue = 'hsv(' + hsv.h + ', ' + hsv.s + '%, ' + hsv.v + '%)';
			break;

		case 'HsvStringColorPicker':
			hsv = colord(value).toHsv();
			convertedValue = 'hsv(' + hsv.h + ', ' + hsv.s + '%, ' + hsv.v + '%)';
			break;

		case 'HsvaColorPicker':
			hsva = colord(value).toHsv();
			convertedValue = 'hsva(' + hsva.h + ', ' + hsva.s + '%, ' + hsva.v + '%, ' + hsva.a + ')';
			break;

		case 'HsvaStringColorPicker':
			hsva = colord(value).toHsv();
			convertedValue = 'hsva(' + hsva.h + ', ' + hsva.s + '%, ' + hsva.v + '%, ' + hsva.a + ')';
			break;

		default:
			convertedValue = colord(value).toHex();
			break;
	}

	return convertedValue;
};

export default util;
