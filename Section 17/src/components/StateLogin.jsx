// const [enteredEmail, setEnteredEmail] = useState("");
// const [enteredPassword, setEnteredPassword] = useState("");
const [enteredValues, setEnteredValues] = useState({
	email: "",
	password: "",
});

// Combined function that gets the email and password
function handleInputChange(identifier, value) {
	setEnteredValues((prevValues) => ({
		...prevValues,
		[identifier]: value,
	}));
}
