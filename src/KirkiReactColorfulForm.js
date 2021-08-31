import { useState, useRef } from "react";
import { colord } from "colord";
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

	const {customizerSetting, pickerComponent, choices, mode} = props;

	// Use local state for the value of the picker.
	const [pickerValue, setPickerValue] = useState(() => {
		if ('hue' === mode) {
			// Hard coded saturation and lightness.
			const valueForPicker = colord('hsl(' + props.value + ', 100%, 50%)').toHsl();
			return colord(valueForPicker).toHsl();
		} else {
			return util.convertColor.forPicker(props.value, pickerComponent);
		}
	});

	// Use local state for the value of the input.
	const [inputValue, setInputValue] = useState(() => {
		if ('hue' === mode) {
			return props.value;
		} else {
			return util.convertColor.forInput(props.value, pickerComponent, {formComponent: choices.formComponent});
		}
	});

	/**
	 * Function to run on picker change.
	 */
	const handlePickerChange = props.onChange ? props.onChange : (color) => {
		if ('hue' === mode) {
			// Notify the input component to set a new value.
			setInputValue(color.h);

			// ! The react-colorful doesn't support the hue-only picker yet - Let's treat it as hsl picker but use only the hue value.
			wp.customize.control(customizerSetting.id).setting.set(color.h);
			return;
		}

		const valueForInput = util.convertColor.forInput(color, pickerComponent, { formComponent: choices.formComponent });

		wp.customize.control(customizerSetting.id).setting.set(valueForInput);

		// Notify the input component to set a new value.
		setInputValue(valueForInput);
	}

	/**
	 * Function to run on input change.
	 *
	 * @param {string|Object|int} valueForInput The value for the input component. The format is int when using hue mode, otherwise string or Object.
	 * @param {string|Object} valueForPicker The value for the picker component.
	 */
	const handleInputChange = (valueForInput, valueForPicker) => {
		// Notify the picker component to set a new value.
		setPickerValue(valueForPicker);
		wp.customize.control(customizerSetting.id).setting.set(valueForInput);
	};

	/**
	 * Function to run on swatches click.
	 *
	 * @param {string} swatchColor The value from the clicked color swatch.
	 */
	const handleSwatchesClick = (swatchColor) => {
		const valueForInput = util.convertColor.forInput(swatchColor, pickerComponent, { formComponent: choices.formComponent });
		const valueForPicker = util.convertColor.forPicker(swatchColor, pickerComponent);

		setPickerValue(valueForPicker);
		setInputValue(valueForInput);
		wp.customize.control(customizerSetting.id).setting.set(valueForInput);
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

	const contentClassName = 'hue' === mode ? 'kirki-control-content kirki-control-content-hue-mode' : 'kirki-control-content';

	// Referene to the wrapper/control content div.
	const contentRef = useRef(null);

	// Reference to the colorPickerContainer div.
	const pickerRef = useRef(null);

	if (jQuery.wp.wpColorPicker) {
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
		<div className={contentClassName} ref={contentRef}>
			{controlLabel}{controlDescription}{controlNotifications}
			<KirkiReactColorfulInput
				contentRef={contentRef}
				pickerRef={pickerRef}
				formComponent={choices.formComponent}
				pickerComponent={pickerComponent}
				mode={mode}
				alpha={choices.alpha}
				color={inputValue}
				togglePickerHandler={togglePicker}
				openPickerHandler={openPicker}
				closePickerHandler={closePicker}
				onChange={handleInputChange}
			/>
			<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
				{'hue' !== mode &&
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
