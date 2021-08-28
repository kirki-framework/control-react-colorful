import { colord } from "colord";

const util = {
	convertColor: {}
};

util.convertColor.forPicker = (value, formComponent) => {
	let convertedValue;

	switch (formComponent) {
		case 'RgbColorPicker':
			convertedValue = colord(value).toRgb();
			break;

		case 'RgbaColorPicker':
			convertedValue = colord(value).toRgb();
			break;

		case 'HslColorPicker':
			convertedValue = colord(value).toHsl();
			break;

		case 'HslaColorPicker':
			convertedValue = colord(value).toHsl();
			break;

		case 'HsvColorPicker':
			const hsv = colord(value).toHsv();
			break;

		case 'HsvaColorPicker':
			const hsva = colord(value).toHsv();
			break;

		default:
			convertedValue = colord(value).toHex();
			break;
	}

	return convertedValue;
};

util.convertColor.forInput = (value, expectedFormat, formComponent) => {
	let convertedValue;

	if (!formComponent) {
		formComponent = expectedFormat.charAt(0).toUpperCase() + expectedFormat.slice(1) + 'ColorPicker';
	}

	switch (formComponent) {
		case 'RgbColorPicker':
			convertedValue = 'hex' === expectedFormat ? colord(value).toHex() : colord(value).toRgbString();

			break;

		case 'RgbaColorPicker':
			const rgba = colord(value).toRgb();

			if (rgba.a < 1) {
				convertedValue = colord(value).toRgbString();
			} else {
				convertedValue = 'hex' === expectedFormat ? colord(value).toHex() : colord(value).toRgbString();

				if (convertedValue.includes('rgb') && !convertedValue.includes('rgba')) {
					convertedValue = convertedValue.replace('rgb', 'rgba');
					convertedValue = convertedValue.replace(')', ', 1)');
				}
			}

			break;

		case 'HslColorPicker':
			convertedValue = 'hex' === expectedFormat ? colord(value).toHex() : colord(value).toHslString();

		case 'HslaColorPicker':
			const hsla = colord(value).toHsl();

			if (hsla.a < 1) {
				convertedValue = colord(value).toHslString();
			} else {
				convertedValue = 'hex' === expectedFormat ? colord(value).toHex() : colord(value).toHslString();
			}

			break;

		case 'HsvColorPicker':
			const hsv = colord(value).toHsv();
			convertedValue = 'hex' === expectedFormat ? colord(value).toHex() : 'hsv(' + hsv.h + ',' + hsv.s + ',' + hsv.v + '%)';
			break;

		case 'HsvaColorPicker':
			const hsva = colord(value).toHsv();

			if (hsva.a < 1) {
				convertedValue = 'hsva(' + hsva.h + ',' + hsva.s + ',' + hsva.v + '%,' + hsva.a + ')';
			} else {
				convertedValue = 'hex' === expectedFormat ? colord(value).toHex() : 'hsva(' + hsva.h + ',' + hsva.s + ',' + hsva.v + '%,' + hsva.a + ')';
			}

			break;

		default:
			convertedValue = colord(value).toHex();
			break;
	}

	return convertedValue;
};

export default util;
