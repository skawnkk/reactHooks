import { useState } from 'react';
function Input() {
	const useInput = (initialValue) => {
		const [value, setValue] = useState(initialValue);
		const handleChange = ({ target }) => {
			setValue(target.value);
		};
		return { value, handleChange };
	};
	const name = useInput('Mr.');

	return (
		<>
			<input
				placeholder="Name"
				value={name.value}
				onChange={name.handleChange}
			></input>

			<input placeholder="Name" {...name}></input>
		</>
	);
}

export default Input;
