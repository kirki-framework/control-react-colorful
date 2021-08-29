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

	const availableFormats = ['hex', 'rgb', 'rgba', 'hsl', 'hsla'];

	const alphaFormats = ['hex', 'rgba', 'hsla'];
	const alphaConversion = {
		hex: 'hex',
		rgb: 'rgba',
		rgba: 'rgba',
		hsl: 'hsla',
		hsla: 'hsla',
	};

	const nonAlphaFormats = ['hex', 'rgb', 'hsl'];
	const nonAlphaConversion = {
		hex: 'hex',
		rgb: 'rgb',
		rgba: 'hex',
		hsl: 'hsl',
		hsla: 'hex',
	};

	const switchFormat = () => {
		let prevFormat = getFormat(value);
		if (!availableFormats.includes(prevFormat)) return;

		const conversion = props.alpha ? alphaConversion : nonAlphaConversion;
		const formats = props.alpha ? alphaFormats : nonAlphaFormats;

		prevFormat = conversion[prevFormat];
		const prevFormatIndex = formats.indexOf(prevFormat);
		let nextFormatIndex = prevFormatIndex + 1;
		nextFormatIndex = nextFormatIndex >= formats.length ? 0 : nextFormatIndex;
		const nextFormat = formats[nextFormatIndex];

		setValue(util.convertColor.forInput(value, nextFormat, null));
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
