import { useState, useEffect, useCallback, useRef } from "react";
import reactCSS from 'reactcss';
import util from './util'
import useClickOutside from "./useClickOutside";

const KirkiReactColorfulInput = (props) => {
	const { customizerSetting, formComponent, onChange, color = "", pickerRef, togglePickerHandler, openPickerHandler, closePickerHandler } = props;
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

	const inputRef = useRef(null);

	useClickOutside(inputRef, pickerRef, closePickerHandler);

	const styles = reactCSS({
		'default': {
			prefixContent: {
				backgroundColor: value,
			},
		},
	});

  return (
		<div class="kirki-react-colorful-input-field" ref={inputRef}>
			<div class="kirki-react-colorful-input-control">
				<span class="kirki-react-colorful-input-color-preview" style={styles.prefixContent} onClick={togglePickerHandler}></span>
				<input
					value={value}
					spellCheck="false" // the element should not be checked for spelling errors.
					onClick={openPickerHandler}
					onChange={handleChange}
				/>
				<span class="kirki-react-colorful-input-format-switcher">
					<span class="kirki-icon-code"></span>
				</span>
			</div>
		</div>
  );
};

export default KirkiReactColorfulInput;
