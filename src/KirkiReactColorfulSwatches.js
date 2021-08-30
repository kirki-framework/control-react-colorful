const KirkiReactColorfulSwatches = ({colors, onClick}) => {

	return (
		<div className="kirki-react-colorful-swatches">
			{colors.map((color, index) => (
				<button
					key={index.toString()}
					type="button"
					className="kirki-react-colorful-swatch"
					data-kirki-color={color}
					style={{backgroundColor: color}}
					onClick={() => onClick(color)}
				>
				</button>
			))}
		</div>
	);

}

export default KirkiReactColorfulSwatches;
