import { useState, useEffect, useCallback, useRef } from "react";
import reactCSS from 'reactcss';
import { getFormat } from "colord";
import util from './util'
import useClickOutside from "./useClickOutside";
import useFocusOutside from "./useFocusOutside";

const KirkiReactColorfulInput = (props) => {
	const { onChange, color = "" } = props;

	const [value, setValue] = useState(() => color);

	const handleChange = useCallback(
		(e) => {
			let valueForInput = e.target.value;
			let valueForPicker;

			if ('hue' === props.mode) {
				valueForInput = valueForInput < 0 ? 0 : valueForInput;
				valueForInput = valueForInput > 360 ? 360 : valueForInput;
				valueForPicker = { h: valueForInput, s: 100, l: 50 }; // Hard coded saturation and lightness.
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

	// Handle outside focus to close the picker popup.
	useFocusOutside(props.contentRef, props.closePickerHandler);

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

	const styles = reactCSS({
		'default': {
			prefixContent: {
				backgroundColor: value,
			}
		},
	});

	return (
		<div className="kirki-react-colorful-input-wrapper" ref={inputRef}>
			<div className="kirki-react-colorful-input-control">
				{'hue' !== props.mode &&
					<button type="button" className="kirki-react-colorful-input-color-preview" style={styles.prefixContent} onClick={props.togglePickerHandler}></button>
				}
				<input
					value={value}
					className="kirki-react-colorful-input"
					spellCheck="false" // The element should not be checked for spelling errors.
					onFocus={props.openPickerHandler}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default KirkiReactColorfulInput;
