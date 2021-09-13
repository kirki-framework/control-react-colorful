import { useState, useRef } from "react";
import { HexColorPicker, RgbColorPicker, RgbaColorPicker, RgbStringColorPicker, RgbaStringColorPicker, HslColorPicker, HslaColorPicker, HslStringColorPicker, HslaStringColorPicker, HsvColorPicker, HsvaColorPicker, HsvStringColorPicker, HsvaStringColorPicker } from "react-colorful";
import KirkiReactColorfulButton from "./KirkiReactColorfulButton";
import KirkiReactColorfulInput from "./KirkiReactColorfulInput";
import KirkiReactColorfulSwatches from "./KirkiReactColorfulSwatches";
import convertColorForPicker from "./utils/convertColorForPicker";
import convertColorForCustomizer from "./utils/convertColorForCustomizer";
import convertColorForInput from "./utils/convertColorForInput";
import useClickOutside from "./useClickOutside";
import useFocusOutside from "./useFocusOutside";

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

	const { control, customizerSetting, useHueMode, pickerComponent, choices } = props;

	const parseEmptyValue = () => useHueMode ? 0 : '#000000';

	const parseHueModeValue = (hueValue) => {
		hueValue = hueValue || parseEmptyValue();
		hueValue = hueValue < 0 ? 0 : hueValue;

		return (hueValue > 360 ? 360 : hueValue);
	}

	const parseInputValue = (value) => {
		if ('' === value) return '';
		return (useHueMode ? parseHueModeValue(value) : convertColorForInput(value, pickerComponent, choices.formComponent));
	};

	const parseCustomizerValue = (value) => {
		if ('' === value) return '';
		return convertColorForCustomizer(value, pickerComponent, choices.formComponent)
	};

	const parsePickerValue = (value) => {
		value = value || parseEmptyValue();

		// Hard coded saturation and lightness when using hue mode.
		return (useHueMode ? { h: value, s: 100, l: 50 } : convertColorForPicker(value, pickerComponent));
	}

	const [inputValue, setInputValue] = useState(() => {
		return parseInputValue(props.value);
	});

	const [pickerValue, setPickerValue] = useState(() => {
		return parsePickerValue(props.value)
	});

	let currentInputValue = inputValue;
	let currentPickerValue = pickerValue;

	// This function will be called when this control's customizer value is changed.
	control.updateComponentState = (value) => {
		const valueForInput = parseInputValue(value);
		let changeInputValue = false;

		if (typeof valueForInput === 'string' || useHueMode) {
			changeInputValue = valueForInput !== inputValue;
		} else {
			changeInputValue = JSON.stringify(valueForInput) !== JSON.stringify(currentInputValue);
		}

		if (changeInputValue) setInputValue(valueForInput);

		const valueForPicker = parsePickerValue(value);
		let changePickerValue = false;

		if (typeof valueForPicker === 'string' || useHueMode) {
			changePickerValue = valueForPicker !== pickerValue;
		} else {
			changePickerValue = JSON.stringify(valueForPicker) !== JSON.stringify(currentPickerValue);
		}

		if (changePickerValue) setPickerValue(valueForPicker);
	};

	const saveToCustomizer = (value) => {
		if (useHueMode) {
			/**
			 * When using hue mode, the pickerComponent is HslColorPicker.
			 * If there is value.h, then value is set from the picker.
			 * Otherwise, value is set from the input or the customizer.
			 */
			value = value.h ? value.h : value;
			value = parseHueModeValue(value);
		} else {
			value = parseCustomizerValue(value);
		}

		customizerSetting.set(value);
	}

	/**
	 * Function to run on picker change.
	 *
	 * @param {string|Object} color The value returned by the picker. It can be a string or a color object.
	 */
	const handlePickerChange = (color) => {
		if (props.onChange) props.onChange(color);
		currentPickerValue = color;
		saveToCustomizer(color);
	};

	const handleInputChange = (value) => {
		currentInputValue = value;
		saveToCustomizer(value);
	};

	const handleReset = (value) => {
		if (!value) {
			currentInputValue = '';
			currentPickerValue = '';
		}

		saveToCustomizer(value);
	};

	/**
	 * Function to run on swatches click.
	 *
	 * @param {string} swatchColor The value from the clicked color swatch.
	 */
	const handleSwatchesClick = (swatchColor) => {
		saveToCustomizer(swatchColor);
	};

	let controlLabel = <span className="customize-control-title" dangerouslySetInnerHTML={{ __html: props.label }} />;
	let controlDescription = <span className="description customize-control-description" dangerouslySetInnerHTML={{ __html: props.description }}></span>;
	let controlNotifications = <div className="customize-control-notifications-container" ref={props.setNotificationContainer}></div>;

	controlLabel = <label className="kirki-control-label">
		{props.label ? controlLabel : ''}
		{props.description ? controlDescription : ''}
	</label>;

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
		case 'RgbStringColorPicker':
			KirkiPickerComponent = RgbStringColorPicker;
			break;
		case 'RgbaColorPicker':
			KirkiPickerComponent = RgbaColorPicker;
			break;
		case 'RgbaStringColorPicker':
			KirkiPickerComponent = RgbaStringColorPicker;
			break;
		// We treat HueColorPicker (hue mode) as HslColorPicker.
		case 'HueColorPicker':
			KirkiPickerComponent = HslColorPicker;
			break;
		case 'HslColorPicker':
			KirkiPickerComponent = HslColorPicker;
			break;
		case 'HslStringColorPicker':
			KirkiPickerComponent = HslStringColorPicker;
			break;
		case 'HslaColorPicker':
			KirkiPickerComponent = HslaColorPicker;
			break;
		case 'HslaStringColorPicker':
			KirkiPickerComponent = HslaStringColorPicker;
			break;
		case 'HsvColorPicker':
			KirkiPickerComponent = HsvColorPicker;
			break;
		case 'HsvStringColorPicker':
			KirkiPickerComponent = HsvStringColorPicker;
			break;
		case 'HsvaColorPicker':
			KirkiPickerComponent = HsvaColorPicker;
			break;
		case 'HsvaStringColorPicker':
			KirkiPickerComponent = HsvaStringColorPicker;
			break;
		default:
			KirkiPickerComponent = HexColorPicker;
			break;
	}

	let formClassName = useHueMode ? 'kirki-control-form use-hue-mode' : 'kirki-control-form';
	formClassName += ' use-' + choices.triggerStyle + '-trigger';

	const formRef = useRef(null); // Reference to the form div.
	const inputRef = useRef(null); // Reference to the form input.
	const pickerRef = useRef(null); // Reference to the picker popup.

	// Handle outside focus to close the picker popup.
	useFocusOutside(formRef, closePicker);

	// Handle outside click to close the picker popup.
	useClickOutside(inputRef, pickerRef, closePicker);

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

	const formInput = <KirkiReactColorfulInput
		pickerComponent={pickerComponent}
		inputRef={inputRef}
		useHueMode={useHueMode}
		color={inputValue}
		initialColor={props.value}
		triggerStyle={choices.triggerStyle}
		isPickerOpen={isPickerOpen}
		togglePickerHandler={togglePicker}
		openPickerHandler={openPicker}
		onChange={handleInputChange}
		onReset={handleReset}
	/>;

	let formButton = '';

	if ('button' === choices.triggerStyle) {
		formButton = <KirkiReactColorfulButton
			pickerComponent={pickerComponent}
			useHueMode={useHueMode}
			buttonText={choices.buttonText}
			color={inputValue}
			initialColor={props.value}
			isPickerOpen={isPickerOpen}
			togglePickerHandler={togglePicker}
			onReset={handleReset}
		/>
	}

	return (
		<div className={formClassName} ref={formRef} tabIndex="1">
			{props.label || props.description ? controlLabel : ''}
			{controlNotifications}
			{'button' === choices.triggerStyle ? formButton : formInput}
			<div ref={pickerRef} className={isPickerOpen ? pickerComponent + ' colorPickerContainer is-open' : pickerComponent + ' colorPickerContainer'}>
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
				{'button' === choices.triggerStyle ? formInput : ''}
			</div>
		</div>
	);

};

export default KirkiReactColorfulForm;
