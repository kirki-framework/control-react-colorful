import { useEffect } from "react";

const useFocusOutside = (contentRef, closeHandler) => {
	useEffect(() => {
		const listener = (e) => {
			// Do nothing if the component hasn't been mounted.
			if (!contentRef.current) return;

			// Do nothing if the focused element is inside the contentRef or the contentRef it self.
			if (contentRef.current.contains(e.target)) return;

			closeHandler();
		};

		document.addEventListener("focus", listener, true);

		return () => {
			document.removeEventListener("focus", listener, true);
		};
	}, [contentRef, closeHandler]);
};

export default useFocusOutside;
