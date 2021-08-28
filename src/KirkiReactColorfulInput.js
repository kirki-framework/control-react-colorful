import { useState, useEffect, useCallback, useRef } from "react";
import reactCSS from 'reactcss';
import { getFormat } from "colord";
import util from './util'
import useClickOutside from "./useClickOutside";

const KirkiReactColorfulInput = (props) => {
	const { formComponent, expectedFormat, onChange, color = "", pickerRef, togglePickerHandler, openPickerHandler, closePickerHandler } = props;

	const [value, setValue] = useState(() => color);

	const handleChange = useCallback(
		(e) => {
			const valueForInput = e.target.value;
			const valueForPicker = util.convertColor.forPicker(valueForInput, formComponent);

			setValue(valueForInput);
			onChange(valueForInput, valueForPicker);
		},
		[onChange]
	);

	// Update the local state when `color` property value is changed.
	useEffect(() => {
		setValue(util.convertColor.forInput(color, expectedFormat, formComponent));
	}, [color]);

	const inputRef = useRef(null);

	useClickOutside(inputRef, pickerRef, closePickerHandler);

	const availableFormats = ['hex', 'rgb', 'rgba'];
	const nonAlphaFormats = ['hex', 'rgb'];
	const nonAlphaConversion = {
		hex: 'hex',
		rgb: 'rgb',
		rgba: 'rgb'
	};

	const switchFormat = () => {
		let prevFormat = getFormat(value);
		if (!availableFormats.includes(prevFormat)) return;

		let nextFormat;
		let prevFormatIndex;
		let nextFormatIndex;

		// If 'alpha' argument in 'choices' is enabled/is true.
		if (props.alpha) {
			prevFormatIndex = availableFormats.indexOf(prevFormat);
			nextFormatIndex = prevFormatIndex + 1;
			nextFormatIndex = nextFormatIndex >= availableFormats.length ? 0 : nextFormatIndex;
			nextFormat = availableFormats[nextFormatIndex];
		} else {
			prevFormat = nonAlphaConversion[prevFormat];
			prevFormatIndex = nonAlphaFormats.indexOf(prevFormat);
			nextFormatIndex = prevFormatIndex + 1;
			nextFormatIndex = nextFormatIndex >= nonAlphaFormats.length ? 0 : nextFormatIndex;
			nextFormat = nonAlphaFormats[nextFormatIndex];
		}

		const newValue = util.convertColor.forInput(value, nextFormat, null);

		console.log(prevFormat);
		console.log(nextFormat);

		setValue(newValue);
	}

	const styles = reactCSS({
		'default': {
			prefixContent: {
				backgroundColor: value,
			},
		},
	});

	return (
		<div class="kirki-react-colorful-input-field" ref={inputRef}>
			<div class="kirki-react-colorful-input-control">
				<span class="kirki-react-colorful-input-color-preview" style={styles.prefixContent} onClick={togglePickerHandler}></span>
				<input
					value={value}
					spellCheck="false" // the element should not be checked for spelling errors.
					onClick={openPickerHandler}
					onChange={handleChange}
				/>
				<span class="kirki-react-colorful-input-format-switcher" onClick={switchFormat}>
					<span class="kirki-icon-code"></span>
				</span>
			</div>
		</div>
	);
};

export default KirkiReactColorfulInput;
