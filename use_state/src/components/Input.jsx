import { useState } from 'react';
function Input() {
	const useInput = (initialValue, validator) => {
		const [value, setValue] = useState(initialValue);
		const handleChange = ({ target }) => {
			let willUpdate = true;
			if (typeof validator === 'function') {
				willUpdate = validator(value);
			}
			if (willUpdate) {
				setValue(target.value);
			}
		};
		return { value, handleChange };
	};

	//유효성검증
	const maxLen = (value) => value.length <= 10;
	// const maxLen = (value) => !value.includes('@');
	const name = useInput('Mr.', maxLen);

	return (
		<>
			<input
				placeholder="Name"
				value={name.value}
				onChange={name.handleChange}
			></input>
		</>
	);
}

export default Input;
