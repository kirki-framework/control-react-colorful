/* globals _, wp, React */

import { useState, useRef } from "react";
import { HexColorPicker, RgbColorPicker, RgbaColorPicker, RgbStringColorPicker, RgbaStringColorPicker, HslColorPicker, HslaColorPicker, HslStringColorPicker, HslaStringColorPicker, HsvColorPicker, HsvaColorPicker, HsvStringColorPicker, HsvaStringColorPicker } from "react-colorful";
import reactCSS from 'reactcss';
import KirkiReactColorfulInput from "./KirkiReactColorfulInput";
import util from './util';

const KirkiReactColorfulForm = (props) => {

	let pickerValue = util.convertColor.forPicker(props.value, props.choices.formComponent);

	const handleChange = props.onChange ? props.onChange : (color) => {
		if (props.mode && 'hue' === props.mode) {
			// ! The react-colorful doesn't support the hue mode yet - Let's treat it as hsl picker but use only the hue value.
			wp.customize.control(props.customizerSetting.id).setting.set(color.h);
			return;
		}

		const inputValue = util.convertColor.forInput(color, props.expectedFormat, props.choices.formComponent);
		wp.customize.control(props.customizerSetting.id).setting.set(inputValue);
	}

	const onInputChange = (valueForPicker, valueForInput) => {
		pickerValue = valueForPicker;
		wp.customize.control(props.customizerSetting.id).setting.set(valueForInput);
	};

	const styles = reactCSS({
		'default': {
			summary: {
				display: 'flex',
				alignItems: 'center',
			},

			summaryColor: {
				background: props.value,
				display: 'block',
				width: '40px',
				height: '2em',
				borderRadius: '4px',
				border: '1px solid rgba(0,0,0,.2)',
			},

			summaryText: {
				color: '#a0a0a0',
				padding: '0 12px',
				fontFamily: 'Menlo, Consolas, monaco, monospace'
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
			console.log('opening');
			setIsPickerOpen(true);
		}
	}

	const closePicker = () => {
		if (isPickerOpen) {
			console.log('closing');
			setIsPickerOpen(false);
		}
	}

	const pickerRef = useRef(null);

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
						color={props.value}
						expectedFormat={props.expectedFormat}
						togglePickerHandler={togglePicker}
						openPickerHandler={openPicker}
						closePickerHandler={closePicker}
						onChange={onInputChange}
					/>
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<HexColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handleChange}
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
						color={props.value}
						expectedFormat={props.expectedFormat}
						togglePickerHandler={togglePicker}
						openPickerHandler={openPicker}
						closePickerHandler={closePicker}
						onChange={onInputChange}
					/>
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<RgbColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handleChange}
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
						color={props.value}
						expectedFormat={props.expectedFormat}
						togglePickerHandler={togglePicker}
						openPickerHandler={openPicker}
						closePickerHandler={closePicker}
						onChange={onInputChange}
					/>
					<div className={isPickerOpen ? 'colorPickerContainer is-open' : 'colorPickerContainer'} ref={pickerRef}>
						<RgbaColorPicker
							{...props.choices}
							color={pickerValue}
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
						/>
					</div>
				</div>
			);
	}

};

export default KirkiReactColorfulForm;
