import { useState, useEffect, useCallback } from "react";
import util from './util'
import reactCSS from 'reactcss';

const KirkiReactColorfulInput = (props) => {
	const { customizerSetting, formComponent, onChange, color = "" } = props;
  const [value, setValue] = useState(() => color);

  const handleChange = useCallback(
    (e) => {
      const inputValue = e.target.value;
			const valueForPicker = util.convertColor.forInput(inputValue, formComponent);

			setValue(inputValue);
			onChange(inputValue, valueForPicker);

			wp.customize.control(customizerSetting.id).setting.set(inputValue);
    },
    [onChange]
  );

	// Update the local state when `color` property value is changed.
	useEffect(() => {
		setValue(color);
	}, [color]);

	const styles = reactCSS({
		'default': {
			prefixContent: {
				backgroundColor: value,
			},
		},
	});

  return (
		<div class="kirki-react-colorful-input-field">
			<div class="kirki-react-colorful-input-prefix">
				<span class="kirki-react-colorful-input-prefix-content" style={styles.prefixContent}></span>
			</div>
			<div class="kirki-react-colorful-input-control">
				<input
					value={value}
					spellCheck="false" // the element should not be checked for spelling errors.
					onChange={handleChange}
				/>
			</div>
			<div class="kirki-react-colorful-input-suffix">
				<span class="kirki-react-colorful-input-suffix-content">
					<span class="kirki-icon-code"></span>
				</span>
			</div>
		</div>
  );
};

export default KirkiReactColorfulInput;
