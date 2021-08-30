import { useState, useEffect, useCallback, useRef } from "react";
import reactCSS from 'reactcss';
import { colord, getFormat } from "colord";
import util from './util'
import useClickOutside from "./useClickOutside";

const KirkiReactColorfulInput = (props) => {
	const { onChange, color = "" } = props;

	const [value, setValue] = useState(() => color);

	const handleChange = useCallback(
		(e) => {
			const valueForInput = e.target.value;
			let valueForPicker;

			if ('hue' === props.mode) {
				valueForPicker = valueForPicker < 0 ? 0 : valueForPicker;
				valueForPicker = valueForPicker > 360 ? 360 : valueForPicker;
				valueForPicker = 'hsl(' + valueForInput + ', 100%, 50%)'; // Hard coded saturation and lightness.
				valueForPicker = colord(value).toHsl();
			} else {
				valueForPicker = util.convertColor.forPicker(valueForInput, props.pickerComponent);
			}

			setValue(valueForInput);

			// Run onChange handler passed by KirkiReactColorfulForm component.
			onChange(valueForInput, valueForPicker);
		},
		[onChange]
	);

	// Update the local state when `color` property value is changed.
	useEffect(() => {
		// We don't need to convert the color since it's already converted from the parent componenent.
		setValue(color);
	}, [color]);

	// Reference to the input field div.
	const inputRef = useRef(null);

	// Handle outside click to close the picker popup.
	useClickOutside(inputRef, props.pickerRef, props.closePickerHandler);

	// This is for the color switcher stuff.
	let useAlpha = false;

	/**
	 * If formComponent is set when setting up Kirki fields, it checks for it.
	 * We ignore the "alpha" choice when formComponent is defined.
	 */
	if (props.formComponent) {
		if ('RgbaColorPicker' === props.formComponent || 'HslaColorPicker' === props.formComponent || 'HsvaColorControl' === props.formComponent) {
			useAlpha = true;
		} else {
			useAlpha = false;
		}
	} else {
		useAlpha = props.alpha ? true : false;
	}

	// Currently, we only support these colors for the picker.
	const availableFormats = ['hex', 'rgb', 'rgba', 'hsl', 'hsla'];

	// But for the format switcher, we only support these colors when useAlpha is true.
	const alphaFormats = ['hex', 'rgba', 'hsla'];
	const alphaConversion = {
		hex: 'hex',
		rgb: 'rgba',
		rgba: 'rgba',
		hsl: 'hsla',
		hsla: 'hsla',
	};

	// And when useAlpha is false, we only support these colors for the format switcher.
	const nonAlphaFormats = ['hex', 'rgb', 'hsl'];
	const nonAlphaConversion = {
		hex: 'hex',
		rgb: 'rgb',
		rgba: 'hex',
		hsl: 'hsl',
		hsla: 'hex',
	};

	const switchFormat = () => {
		// Hue mode doesn't  have switcher.
		if ('hue' === props.mode) return;

		// Get the current value format using colord.
		let prevFormat = getFormat(value);

		// If the format is not listed under `availableFormats`, then stop here.
		if (!availableFormats.includes(prevFormat)) return;

		const conversion = useAlpha ? alphaConversion : nonAlphaConversion;
		const formats = useAlpha ? alphaFormats : nonAlphaFormats;

		// The format before we switch.
		prevFormat = conversion[prevFormat];

		const prevFormatIndex = formats.indexOf(prevFormat);

		let nextFormatIndex = prevFormatIndex + 1;
		nextFormatIndex = nextFormatIndex >= formats.length ? 0 : nextFormatIndex;

		const nextFormat = formats[nextFormatIndex];
		const expectedPicker = nextFormat.charAt(0).toUpperCase() + nextFormat.slice(1) + 'ColorPicker';

		const opts = { formComponent: expectedPicker, mode: props.mode };

		setValue(util.convertColor.forInput(value, expectedPicker, opts));
	}

	const styles = reactCSS({
		'default': {
			prefixContent: {
				backgroundColor: value,
			},
			hueContent: {
				backgroundColor: 'transparent'
			}
		},
	});

	return (
		<div className="kirki-react-colorful-input-field" ref={inputRef}>
			<div className="kirki-react-colorful-input-control">
				<span className="kirki-react-colorful-input-color-preview" style={'hue' === props.mode ? styles.hueContent : styles.prefixContent} onClick={props.togglePickerHandler}></span>
				<input
					value={value}
					spellCheck="false" // the element should not be checked for spelling errors.
					onClick={props.openPickerHandler}
					onChange={handleChange}
				/>
				<span className="kirki-react-colorful-input-format-switcher" onClick={switchFormat}>
					<span className="kirki-icon-code"></span>
				</span>
			</div>
		</div>
	);
};

export default KirkiReactColorfulInput;
