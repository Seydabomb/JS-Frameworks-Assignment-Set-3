const Input = ({ label, id, error, ...props }) => {
	return (
		<div className="control no-margin">
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				// type=, name=, value=, onBlur, and onChange is set by putting those attributes on the Input component directly. They are being forwarded here.
				{...props}
			/>
			<div className="control-error">{error && <p>{error}</p>}</div>
		</div>
	);
};

export default Input;
