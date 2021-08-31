import { useState, useEffect, useCallback, useRef } from "react";
import reactCSS from 'reactcss';
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
				valueForInput = parseHueModeValue(valueForInput);
				valueForPicker = { h: valueForInput, s: 100, l: 50 }; // Hard coded saturation and lightness.
			} else {
				valueForPicker = util.convertColor.forPicker(valueForInput, props.pickerComponent);
			}

			setValue(valueForInput);
			onChange(valueForInput, valueForPicker); // Run onChange handler passed by KirkiReactColorfulForm component.
		},
		[onChange]
	);

	const resetColor = () => {
		let valueForInput;
		let valueForPicker;

		if ('hue' === props.mode) {
			valueForInput = parseHueModeValue(props.defaultColor);
			valueForPicker = { h: valueForInput, s: 100, l: 50 }; // Hard coded saturation and lightness.
		} else {
			valueForInput = util.convertColor.forInput(props.defaultColor, props.pickerComponent, { formComponent: props.formComponent });
			valueForPicker = util.convertColor.forPicker(props.defaultColor, props.pickerComponent);
		}

		setValue(valueForInput);
		onChange(valueForInput, valueForPicker); // Run onChange handler passed by KirkiReactColorfulForm component.
	};

	const parseHueModeValue = (hueValue) => {
		hueValue = hueValue < 0 ? 0 : hueValue;
		return (hueValue > 360 ? 360 : hueValue);
	}

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
					<button type="button" className="kirki-react-colorful-color-preview" style={styles.prefixContent} onClick={props.togglePickerHandler}></button>
				}
				<input
					type="text"
					value={value}
					className="kirki-react-colorful-input"
					spellCheck="false" // The element should not be checked for spelling errors.
					onFocus={props.openPickerHandler}
					onChange={handleChange}
				/>
				<button type="button" className="kirki-react-colorful-reset-button" onClick={resetColor} style={{display: props.isPickerOpen ? 'flex' : 'none'}}>
					<i className="dashicons dashicons-image-rotate"></i>
				</button>
			</div>
		</div>
	);
};

export default KirkiReactColorfulInput;
