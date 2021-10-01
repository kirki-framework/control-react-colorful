import { useState, useEffect, useCallback } from "react";
import reactCSS from 'reactcss';

const KirkiReactColorfulInput = (props) => {
	const { onChange, onReset, triggerStyle, color = "" } = props;
	const [value, setValue] = useState(() => color);

	const handleChange = useCallback(
		(e) => {
			onChange(e.target.value); // Run onChange handler passed by `KirkiReactColorfulForm` component.
		},
		[onChange]
	);

	// Update the local state when `color` property value is changed.
	useEffect(() => {
		// We don't need to convert the color since it's already handled in parent component.
		setValue(color);
	}, [color]);

	const pickersWithAlpha = ['RgbaColorPicker', 'RgbaStringColorPicker', 'HslaColorPicker', 'HslaStringColorPicker', 'HsvaColorPicker', 'HsvaStringColorPicker'];

	const styles = reactCSS({
		'default': {
			colorPreviewWrapper: {
				backgroundImage: (pickersWithAlpha.includes(props.pickerComponent) ? 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==")' : 'none'),
			},
			colorPreview: {
				backgroundColor: value,
			}
		},
	});

	return (
		<div className="kirki-color-input-wrapper">
			<div className="kirki-color-input-control">
				{!props.useHueMode &&
					<div className="kirki-color-preview-wrapper" style={styles.colorPreviewWrapper}>
						<button type="button" className="kirki-color-preview" style={styles.colorPreview}></button>
					</div>
				}
				<input
					type="text"
					value={value}
					className="kirki-color-input"
					spellCheck="false"
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default KirkiReactColorfulInput;
