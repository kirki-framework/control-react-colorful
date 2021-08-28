/* globals _, wp, React */
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
			details: {
				border: '1px solid rgba(0,0,0,.2)',
				padding: '5px',
				borderRadius: '5px'
			},

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
	let summary = <summary style={styles.summary}><span style={styles.summaryColor}></span><span style={styles.summaryText}>{props.value}</span></summary>
	let isSummaryDefaultOpen = (true === props.choices.summaryOpen) ? 'open="true"' : '';

	switch (props.choices.formComponent) {
		case 'HexColorPicker':
			return (
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					{summary}
					<div style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
						<KirkiReactColorfulInput
							control={props.control}
							customizerSetting={props.customizerSetting}
							formComponent={props.choices.formComponent}
							color={props.value}
							expectedFormat={props.expectedFormat}
							onChange={onInputChange}
						/>
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					{summary}
					<div style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
						<KirkiReactColorfulInput
							control={props.control}
							customizerSetting={props.customizerSetting}
							formComponent={props.choices.formComponent}
							color={props.value}
							expectedFormat={props.expectedFormat}
							onChange={onInputChange}
						/>
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					{summary}
					<div style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
						<KirkiReactColorfulInput
							control={props.control}
							customizerSetting={props.customizerSetting}
							formComponent={props.choices.formComponent}
							color={props.value}
							expectedFormat={props.expectedFormat}
							onChange={onInputChange}
						/>
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<div className="colorPickerContainer">
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<div className="colorPickerContainer">
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<div className="colorPickerContainer">
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<div className="colorPickerContainer">
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<div className="colorPickerContainer">
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					{summary}
					<div style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					{summary}
					<div style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<div className="colorPickerContainer">
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<div className="colorPickerContainer">
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					{summary}
					<div style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
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
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					{summary}
					<div style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
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
