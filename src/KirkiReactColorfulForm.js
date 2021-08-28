/* globals _, wp, React */

import { useState, useRef } from "react";
import { HexColorPicker, RgbColorPicker, RgbaColorPicker, RgbStringColorPicker, RgbaStringColorPicker, HslColorPicker, HslaColorPicker, HslStringColorPicker, HslaStringColorPicker, HsvColorPicker, HsvaColorPicker, HsvStringColorPicker, HsvaStringColorPicker } from "react-colorful";
import reactCSS from 'reactcss';
import KirkiReactColorfulInput from "./KirkiReactColorfulInput";
import util from './util';

const KirkiReactColorfulForm = (props) => {

	// Use local state for the value of the picker.
	const [pickerValue, setPickerValue] = useState(() => {
		return util.convertColor.forPicker(props.value, props.choices.formComponent);
	});

	// Use local state for the value of the input.
	const [inputValue, setInputValue] = useState(() => {
		return util.convertColor.forPicker(props.value, props.expectedFormat, props.choices.formComponent);
	});

	const handlePickerChange = props.onChange ? props.onChange : (selectedColor) => {
		if (props.mode && 'hue' === props.mode) {
			// ! The react-colorful doesn't support the hue mode yet - Let's treat it as hsl picker but use only the hue value.
			wp.customize.control(props.customizerSetting.id).setting.set(selectedColor.h);
			return;
		}

		const valueForInput = util.convertColor.forInput(selectedColor, props.expectedFormat, props.choices.formComponent);

		wp.customize.control(props.customizerSetting.id).setting.set(valueForInput);

		// Notify the input component to set new value.
		setInputValue(valueForInput);
	}

	const handleInputChange = (valueForInput, valueForPicker) => {
		// Notify the picker component to set new value.
		setPickerValue(valueForPicker);
		wp.customize.control(props.customizerSetting.id).setting.set(valueForInput);
	};

	const styles = reactCSS({
		'default': {
			summary: {
				display: 'flex',
				alignItems: 'center',
			}
		},
	});

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
		if (!isPickerOpen) {
			setIsPickerOpen(true);
		}
	}

	const closePicker = () => {
		if (isPickerOpen) {
			setIsPickerOpen(false);
		}
	}

	const pickerRef = useRef(null);
	const useAlpha = props.choices.alpha ? true : false;

	switch (props.choices.formComponent) {
		case 'HexColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<KirkiReactColorfulInput
						pickerRef={pickerRef}
						control={props.control}
						customizerSetting={props.customizerSetting}
						formComponent={props.choices.formComponent}
						alpha={useAlpha}
						color={inputValue}
						expectedFormat={props.expectedFormat}
						togglePickerHandler={togglePicker}
						openPickerHandler={openPicker}
						closePickerHandler={closePicker}
						onChange={handleInputChange}
					/>
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HexColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'RgbColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<KirkiReactColorfulInput
						pickerRef={pickerRef}
						control={props.control}
						customizerSetting={props.customizerSetting}
						formComponent={props.choices.formComponent}
						alpha={useAlpha}
						color={inputValue}
						expectedFormat={props.expectedFormat}
						togglePickerHandler={togglePicker}
						openPickerHandler={openPicker}
						closePickerHandler={closePicker}
						onChange={handleInputChange}
					/>
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<RgbColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'RgbaColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<KirkiReactColorfulInput
						pickerRef={pickerRef}
						control={props.control}
						customizerSetting={props.customizerSetting}
						formComponent={props.choices.formComponent}
						alpha={useAlpha}
						color={inputValue}
						expectedFormat={props.expectedFormat}
						togglePickerHandler={togglePicker}
						openPickerHandler={openPicker}
						closePickerHandler={closePicker}
						onChange={handleInputChange}
					/>
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<RgbaColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'RgbStringColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<RgbStringColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'RgbaStringColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<RgbaStringColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'HslColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HslColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'HslaColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HslaColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'HslStringColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HslStringColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'HslaStringColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HslaStringColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'HsvColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HsvColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'HsvaColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HsvaColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'HsvStringColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HsvStringColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		case 'HsvaStringColorPicker':
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HsvaStringColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
		default:
			return (
				<div class="kirki-control-content">
					{controlLabel}{controlDescription}{controlNotifications}
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<RgbaColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handlePickerChange}
						/>
					</div>
				</div>
			);
	}

};

export default KirkiReactColorfulForm;
