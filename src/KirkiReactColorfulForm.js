import { useState, useRef } from "react";
import { HexColorPicker, RgbColorPicker, RgbaColorPicker, RgbStringColorPicker, RgbaStringColorPicker, HslColorPicker, HslaColorPicker, HslStringColorPicker, HslaStringColorPicker, HsvColorPicker, HsvaColorPicker, HsvStringColorPicker, HsvaStringColorPicker } from "react-colorful";
import KirkiReactColorfulInput from "./KirkiReactColorfulInput";
import KirkiReactColorfulSwatches from "./KirkiReactColorfulSwatches";
import util from './util';

/**
 * The form component of Kirki React Colorful.
 *
 * Globals:
 * _, wp, React, ReactDOM
 *
 * @param {Object} props The props for the component.
 * @returns The component element.
 */
const KirkiReactColorfulForm = (props) => {

	const { customizerSetting, useHueMode, pickerComponent, choices } = props;

	const parsePickerValue = (value) => {
		let valueForPicker = util.convertColor.forPicker(value, pickerComponent);
		valueForPicker = useHueMode ? { h: value, s: 100, l: 50 } : valueForPicker; // Hard coded saturation and lightness when using hue mode.

		return valueForPicker;
	}

	const parseHueModeValue = (hueValue) => {
		hueValue = hueValue < 0 ? 0 : hueValue;
		return (hueValue > 360 ? 360 : hueValue);
	}

	const [inputValue, setInputValue] = useState(props.value);

	const [pickerValue, setPickerValue] = useState(() => {
		return parsePickerValue(props.value)
	});

	// This function will be called when this control's customizer value is changed.
	props.control.componentCallback = (value) => {
		const valueForInput = '' !== value ? value : (useHueMode ? parseHueModeValue(props.value) : props.value); // props.value is treated as initial value here.
		const valueForPicker = '' !== value ? value : (useHueMode ? 0 : '#000000');

		setInputValue(valueForInput);
		setPickerValue(parsePickerValue(valueForPicker));
	};

	const saveToCustomizer = (value) => {
		wp.customize.control(customizerSetting.id).setting.set(value);
	}

	/**
	 * Function to run on picker change.
	 *
	 * @param {string|Object} color The value returned by the picker. It can be a string or a color object.
	 */
	const handlePickerChange = (color) => {
		if (props.onChange) props.onChange(color);

		if (useHueMode) {
			// ! The react-colorful doesn't support the hue-only picker yet - We treat it as hsl picker, but save only the hue value.
			saveToCustomizer(color.h);
			return;
		}

		const value = util.convertColor.forInput(color, pickerComponent, { formComponent: choices.formComponent });
		saveToCustomizer(value);
	}

	/**
	 * Function to run on swatches click.
	 *
	 * @param {string} swatchColor The value from the clicked color swatch.
	 */
	const handleSwatchesClick = (swatchColor) => {
		const value = util.convertColor.forInput(swatchColor, pickerComponent, { formComponent: choices.formComponent });
		saveToCustomizer(value);
	};

	let controlLabel = <label className="customize-control-title">{props.label}</label>;
	let controlDescription = <span className="description customize-control-description" dangerouslySetInnerHTML={{ __html: props.description }}></span>;
	let controlNotifications = <div className="customize-control-notifications-container" ref={props.setNotificationContainer}></div>;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const togglePicker = () => {
		if (isPickerOpen) {
			closePicker();
		} else {
			openPicker();
		}
	}

	const openPicker = () => {
		if (!isPickerOpen) setIsPickerOpen(true);
	}

	const closePicker = () => {
		if (isPickerOpen) setIsPickerOpen(false);
	}

	let KirkiPickerComponent;

	// We can't just render `pickerComponent` directly, we need these lines so that the compiler will import them.
	switch (pickerComponent) {
		case 'HexColorPicker':
			KirkiPickerComponent = HexColorPicker;
			break;
		case 'RgbColorPicker':
			KirkiPickerComponent = RgbColorPicker;
			break;
		case 'RgbaColorPicker':
			KirkiPickerComponent = RgbaColorPicker;
			break;
		case 'RgbStringColorPicker':
			KirkiPickerComponent = RgbStringColorPicker;
			break;
		case 'RgbaStringColorPicker':
			KirkiPickerComponent = RgbaStringColorPicker;
			break;
		// We treat hue mode as hsl picker.
		case 'HueColorPicker':
			KirkiPickerComponent = HslColorPicker;
		case 'HslColorPicker':
			KirkiPickerComponent = HslColorPicker;
			break;
		case 'HslaColorPicker':
			KirkiPickerComponent = HslaColorPicker;
			break;
		case 'HslStringColorPicker':
			KirkiPickerComponent = HslStringColorPicker;
			break;
		case 'HslaStringColorPicker':
			KirkiPickerComponent = HslaStringColorPicker;
			break;
		case 'HsvColorPicker':
			KirkiPickerComponent = HsvColorPicker;
			break;
		case 'HsvaColorPicker':
			KirkiPickerComponent = HsvaColorPicker;
			break;
		case 'HsvStringColorPicker':
			KirkiPickerComponent = HsvStringColorPicker;
			break;
		case 'HsvaStringColorPicker':
			KirkiPickerComponent = HsvaStringColorPicker;
			break;
		default:
			KirkiPickerComponent = HexColorPicker;
			break;
	}

	const contentClassName = useHueMode ? 'kirki-control-content kirki-control-content-hue-mode' : 'kirki-control-content';

	// Referene to the wrapper/control content div.
	const contentRef = useRef(null);

	// Reference to the colorPickerContainer div.
	const pickerRef = useRef(null);

	if (jQuery.wp && jQuery.wp.wpColorPicker) {
		const wpColorPickerSwatches = jQuery.wp.wpColorPicker.prototype.options.palettes;

		// If 3rd parties applied custom colors to wpColorPicker swatches, let's use them.
		if (Array.isArray(wpColorPickerSwatches)) {
			if (wpColorPickerSwatches.length < 8) {
				for (let i = wpColorPickerSwatches.length; i <= 8; i++) {
					wpColorPickerSwatches.push(choices.swatches[i]);
				}
			}

			choices.swatches = wpColorPickerSwatches;
		}
	}

	return (
		<div className={contentClassName} ref={contentRef} tabIndex="1">
			{controlLabel}{controlDescription}{controlNotifications}
			<KirkiReactColorfulInput
				contentRef={contentRef}
				pickerRef={pickerRef}
				formComponent={choices.formComponent}
				pickerComponent={pickerComponent}
				useHueMode={useHueMode}
				alpha={choices.alpha}
				color={inputValue}
				initialColor={props.value}
				isPickerOpen={isPickerOpen}
				togglePickerHandler={togglePicker}
				openPickerHandler={openPicker}
				closePickerHandler={closePicker}
				onChange={saveToCustomizer}
				parseHueModeValue={parseHueModeValue}
			/>
			<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
				{!useHueMode &&
					<KirkiReactColorfulSwatches
						colors={choices.swatches}
						onClick={handleSwatchesClick}
					/>
				}
				<KirkiPickerComponent
					color={pickerValue}
					onChange={handlePickerChange}
				/>
			</div>
		</div>
	);

};

export default KirkiReactColorfulForm;
