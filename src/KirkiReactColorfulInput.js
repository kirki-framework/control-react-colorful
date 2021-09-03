import { useState, useEffect, useCallback, useRef } from "react";
import reactCSS from 'reactcss';
import useClickOutside from "./useClickOutside";
import useFocusOutside from "./useFocusOutside";

const KirkiReactColorfulInput = (props) => {
	const { useHueMode, onChange, initialColor = "", color = "" } = props;
	const [value, setValue] = useState(() => color);

	const handleChange = useCallback(
		(e) => {
			const valueForInput = useHueMode ? parseHueModeValue(valueForInput) : e.target.value;

			setValue(valueForInput);
			onChange(valueForInput); // Run onChange handler passed by `KirkiReactColorfulForm` component.
		},
		[onChange]
	);

	const resetColor = () => {
		let valueForInput = '';

		if ('' !== initialColor) {
			valueForInput = useHueMode ? parseHueModeValue(initialColor) : initialColor;
		}

		setValue(valueForInput);
		onChange(initialColor); // Run onChange handler passed by `KirkiReactColorfulForm` component.
	};

	const parseHueModeValue = (hueValue) => {
		hueValue = hueValue < 0 ? 0 : hueValue;
		return (hueValue > 360 ? 360 : hueValue);
	}

	// Update the local state when `color` property value is changed.
	useEffect(() => {
		// We don't need to convert the color since it's using the customizer value.
		setValue(color);
	}, [color]);

	// Reference to the input wrapper div.
	const inputRef = useRef(null);

	// Handle outside click to close the picker popup.
	useClickOutside(inputRef, props.pickerRef, props.closePickerHandler);

	// Handle outside focus to close the picker popup.
	useFocusOutside(props.contentRef, props.closePickerHandler);

	const styles = reactCSS({
		'default': {
			colorPreviewWrapper: {
				backgroundImage: (props.alpha ? 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==")' : 'none'),
			},
			colorPreview: {
				backgroundColor: value,
			}
		},
	});

	return (
		<div className="kirki-react-colorful-input-wrapper" ref={inputRef}>
			<div className="kirki-react-colorful-input-control">
				{!useHueMode &&
					<div className="kirki-react-colorful-color-preview-wrapper" style={styles.colorPreviewWrapper}>
						<button type="button" className="kirki-react-colorful-color-preview" style={styles.colorPreview} onClick={props.togglePickerHandler}></button>
					</div>
				}
				<input
					type="text"
					value={value}
					className="kirki-react-colorful-input"
					spellCheck="false"
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
