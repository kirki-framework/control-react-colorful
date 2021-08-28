import { useEffect } from "react";

/**
 * Code was taken and then modified from https://codesandbox.io/s/opmco?file=/src/useClickOutside.js:0-1192
 * It was improved version of https://usehooks.com/useOnClickOutside/
 */
const useClickOutside = (inputRef, pickerRef, closeHandler) => {
	useEffect(() => {
		let startedInside = false;
		let startedWhenMounted = false;

		const listener = (event) => {
			// Do nothing if `mousedown` or `touchstart` started either inside inputRef or pickerRef element
			if (startedInside || !startedWhenMounted) return;

			// Do nothing if clicking inputRef's element or descendent elements
			if (!inputRef.current || inputRef.current.contains(event.target)) return;

			// Do nothing if clicking pickerRef's element or descendent elements
			if (!pickerRef.current || pickerRef.current.contains(event.target)) return;

			console.log('running closeHandler');
			closeHandler();
		};

		const validateEventStart = (event) => {
			startedWhenMounted = inputRef.current && pickerRef.current;
			startedInside = (inputRef.current && inputRef.current.contains(event.target)) || (pickerRef.current && pickerRef.current.contains(event.target));
		};

		document.addEventListener("mousedown", validateEventStart);
		document.addEventListener("touchstart", validateEventStart);
		document.addEventListener("click", listener);

		return () => {
			document.removeEventListener("mousedown", validateEventStart);
			document.removeEventListener("touchstart", validateEventStart);
			document.removeEventListener("click", listener);
		};
	}, [inputRef, pickerRef, closeHandler]);
};

export default useClickOutside;
