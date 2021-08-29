/* globals _, wp, React */

import { useState, useRef } from "react";
import { HexColorPicker, RgbColorPicker, RgbaColorPicker, RgbStringColorPicker, RgbaStringColorPicker, HslColorPicker, HslaColorPicker, HslStringColorPicker, HslaStringColorPicker, HsvColorPicker, HsvaColorPicker, HsvStringColorPicker, HsvaStringColorPicker } from "react-colorful";
import KirkiReactColorfulInput from "./KirkiReactColorfulInput";
import util from './util';

const KirkiReactColorfulForm = (props) => {

	// Use local state for the value of the picker.
	const [pickerValue, setPickerValue] = useState(() => {
		return util.convertColor.forPicker(props.value, props.pickerComponent);
	});

	// Use local state for the value of the input.
	const [inputValue, setInputValue] = useState(() => {
		return util.convertColor.forInput(props.value, props.pickerComponent, props.choices);
	});

	const handlePickerChange = props.onChange ? props.onChange : (color) => {
		if (props.mode && 'hue' === props.mode) {
			// ! The react-colorful doesn't support the hue-only picker yet - Let's treat it as hsl picker but use only the hue value.
			wp.customize.control(props.customizerSetting.id).setting.set(color.h);
			return;
		}

		const valueForInput = util.convertColor.forInput(color, props.pickerComponent, props.choices);

		wp.customize.control(props.customizerSetting.id).setting.set(valueForInput);

		// Notify the input component to set a new value.
		setInputValue(valueForInput);
	}

	const handleInputChange = (valueForInput, valueForPicker) => {
		// Notify the picker component to set a new value.
		setPickerValue(valueForPicker);
		wp.customize.control(props.customizerSetting.id).setting.set(valueForInput);
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

	// We can't just render `props.pickerComponent` directly, we need these lines so that the compiler will import them.
	switch (props.pickerComponent) {
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

	// Reference to the colorPickerContainer div.
	const pickerRef = useRef(null);

	return (
		<div className="kirki-control-content">
			{controlLabel}{controlDescription}{controlNotifications}
			<KirkiReactColorfulInput
				pickerRef={pickerRef}
				formComponent={props.choices.formComponent}
				pickerComponent={props.pickerComponent}
				alpha={props.choices.alpha}
				color={inputValue}
				togglePickerHandler={togglePicker}
				openPickerHandler={openPicker}
				closePickerHandler={closePicker}
				onChange={handleInputChange}
			/>
			<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
				<KirkiPickerComponent
					color={pickerValue}
					onChange={handlePickerChange}
				/>
			</div>
		</div>
	);

};

export default KirkiReactColorfulForm;
