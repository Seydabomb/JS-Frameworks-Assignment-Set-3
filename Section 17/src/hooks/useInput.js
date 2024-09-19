import { useState } from "react";

export function useInput(defaultValue, validationFunction) {
	const [enteredValue, setEnteredValue] = useState(defaultValue);
	const [didEdit, setDidEdit] = useState(false);

	const valueIsValid = validationFunction(enteredValue);

	// Combined function that gets the email and password
	function handleInputChange(event) {
		setEnteredValue(event.target.value);
		setDidEdit(false);
	}

	function handleInputBlur() {
		setDidEdit(true);
	}

	// returning an object
	return {
		value: enteredValue,
		handleInputChange,
		handleInputBlur,
		hasError: didEdit && !valueIsValid,
	};
}
