import { useState, useEffect, useCallback } from "react";
import util from './util'

const KirkiReactColorfulInput = (props) => {
	const { control, customizerSetting, formComponent, onChange, color = "" } = props;
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

	// Update the local state when `color` property value is changed
	useEffect(() => {
		setValue(color);
	}, [color]);


  return (
    <input
      value={value}
      spellCheck="false" // the element should not be checked for spelling errors
      onChange={handleChange}
    />
  );
};

export default KirkiReactColorfulInput;
