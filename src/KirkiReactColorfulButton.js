import { useState, useEffect } from "react";
import reactCSS from 'reactcss';

const KirkiReactColorfulButton = (props) => {
	const { useHueMode, onChange, parseHueModeValue, buttonText, initialColor = "", color = "" } = props;
	const [value, setValue] = useState(() => color);

	const resetColor = () => {
		let valueForInput = '';

		if ('' !== initialColor) {
			valueForInput = useHueMode ? parseHueModeValue(initialColor) : initialColor;
		}

		setValue(valueForInput);
		onChange(initialColor); // Run onChange handler passed by `KirkiReactColorfulForm` component.
	};

	// Update the local state when `color` property value is changed.
	useEffect(() => {
		// We don't need to convert the color since it's using the customizer value.
		setValue(color);
	}, [color]);

	const pickersWithAlpha = ['RgbaColorPicker', 'HslaColorPicker', 'HsvaColorPicker'];

	const styles = reactCSS({
		'default': {
			triggerButton: {
				backgroundImage: (pickersWithAlpha.includes(props.pickerComponent) ? 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==")' : 'none'),
			},
			colorPreview: {
				backgroundColor: value,
			}
		},
	});

	return (
		<div className="kirki-trigger-button-wrapper">
			<button type="button" className="kirki-trigger-button" onClick={props.togglePickerHandler} style={styles.triggerButton}>
				{!useHueMode &&
					<span className="kirki-color-preview" style={styles.colorPreview}></span>
				}
				<span className="kirki-button-text">{buttonText}</span>
			</button>

			<button
				type="button"
				className="kirki-control-reset"
				onClick={resetColor}
				title="reset color"
				style={{ display: props.isPickerOpen ? 'flex' : 'none' }}
			>
				<i className="dashicons dashicons-image-rotate"></i>
			</button>
		</div>
	);
};

export default KirkiReactColorfulButton;
