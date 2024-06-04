import { useState } from 'react';

function SubmitButton() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function handleSubmit() {
		setIsSubmitted(true);
	};

	return (
		<button onClick={handleSubmit}>
			{ isSubmitted ? 'Loading…' : 'Submit' }
		</button>
	);
};

export default SubmitButton;
