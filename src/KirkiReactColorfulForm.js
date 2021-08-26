/* globals _, wp, React */
import { HexColorPicker, RgbColorPicker, RgbaColorPicker, RgbStringColorPicker, RgbaStringColorPicker, HslColorPicker, HslaColorPicker, HslStringColorPicker, HslaStringColorPicker, HsvColorPicker, HsvaColorPicker, HsvStringColorPicker, HsvaStringColorPicker } from "react-colorful";

import reactCSS from 'reactcss';

const KirkiReactColorfulForm = (props) => {

	const handleChange = props.onChange ? props.onChange : (color) => {
		console.log(props.choices.formComponent);

		if (props.mode && 'hue' === props.mode) {
			// ! The react-colorful doesn't support the hue mode yet - Let's treat it as hsl picker but use only the hue value.
			wp.customize.control(props.customizerSetting.id).setting.set(color.h);
			return;
		}

		let renderedValue = '';

		switch (props.choices.formComponent) {
			case 'RgbColorPicker':
				renderedValue = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
				break;

			case 'RgbaColorPicker':
				renderedValue = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';

			case 'HslColorPicker':
				renderedValue = 'hsl(' + color.h + ',' + color.s + ',' + color.l + '%)';

			case 'HslaColorPicker':
				renderedValue = 'hsla(' + color.h + ',' + color.s + ',' + color.l + '%,' + color.a + ')';

			case 'HsvColorPicker':
				renderedValue = 'hsl(' + color.h + ',' + color.s + ',' + color.v + '%)';

			case 'HsvaColorPicker':
				renderedValue = 'hsla(' + color.h + ',' + color.s + ',' + color.v + '%,' + color.a + ')';

			default:
				renderedValue = color;
				break;
		}

		wp.customize.control(props.customizerSetting.id).setting.set(renderedValue);
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
					<div className="colorPickerContainer">
						<HexColorPicker
							{...props.choices}
							color={props.value}
							onChange={handleChange}
						/>
					</div>
				</div>
			);
		case 'RgbColorPicker':
			return (
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<details style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
						{summary}
						<RgbColorPicker
							{...props.choices}
							color={props.value}
							onChange={handleChange}
						/>
					</details>
				</div>
			);
		case 'RgbaColorPicker':
			return (
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<details style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
						{summary}
						<RgbaColorPicker
							{...props.choices}
							color={props.value}
							onChange={handleChange}
						/>
					</details>
				</div>
			);
		case 'RgbStringColorPicker':
			return (
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<div className="colorPickerContainer">
						<RgbStringColorPicker
							{...props.choices}
							color={props.value}
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
							color={props.value}
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
							color={props.value}
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
							color={props.value}
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
							color={props.value}
							onChange={handleChange}
						/>
					</div>
				</div>
			);
		case 'HslaStringColorPicker':
			return (
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<details style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
						{summary}
						<HslaStringColorPicker
							{...props.choices}
							color={props.value}
							onChange={handleChange}
						/>
					</details>
				</div>
			);
		case 'HsvColorPicker':
			return (
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<details style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
						{summary}
						<HsvColorPicker
							{...props.choices}
							color={props.value}
							onChange={handleChange}
						/>
					</details>
				</div>
			);
		case 'HsvaColorPicker':
			return (
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<div className="colorPickerContainer">
						<HsvaColorPicker
							{...props.choices}
							color={props.value}
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
							color={props.value}
							onChange={handleChange}
						/>
					</div>
				</div>
			);
		case 'HsvaStringColorPicker':
			return (
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<details style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
						{summary}
						<HsvaStringColorPicker
							{...props.choices}
							color={props.value}
							onChange={handleChange}
						/>
					</details>
				</div>
			);
		default:
			return (
				<div>
					{controlLabel}{controlDescription}{controlNotifications}
					<details style={styles.details} className="colorPickerContainer" {...isSummaryDefaultOpen}>
						{summary}
						<RgbaColorPicker
							{...props.choices}
							color={props.value}
							onChange={handleChange}
						/>
					</details>
				</div>
			);
	}
};

export default KirkiReactColorfulForm;
