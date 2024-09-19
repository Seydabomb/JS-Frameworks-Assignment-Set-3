import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

// Using State in useInput (the hook)
// Can validate on every keystroke
export default function Login() {
	// Using a custom hook "useInput.js"
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput("", (value) => isEmail(value) && isNotEmpty(value));

	const {
		value: passwordValue,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: passwordHasError,
	} = useInput("", (value) => hasMinLength(value, 6));

	function handleSubmit(event) {
		event.preventDefault();

		if (emailHasError || passwordHasError) {
			return;
		}

		console.log(emailValue, passwordValue);
	}

	return (
		// noValidate prevents the browser form doing the pop-up instead of the text
		<form onSubmit={handleSubmit} noValidate>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label="Email"
					id="email"
					type="email"
					name="email"
					onBlur={handleEmailBlur}
					onChange={handleEmailChange}
					value={emailValue}
					error={emailHasError && "Please enter a valid email!"}
				></Input>

				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
					value={passwordValue}
					error={passwordHasError && "Please enter a valid password!"}
				></Input>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
