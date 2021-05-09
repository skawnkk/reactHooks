const usePreventLeave = () => {
	const listener = (event) => {
		event.preventDefault();
		event.returnValue = ''; //->크롬기능
	};
	const enablePrevent = () => window.addEventListener('beforeunload', listener);
	const disablePrevent = () =>
		window.removeEventListener('beforeunload', listener);
	return { enablePrevent, disablePrevent };
};

const PreventLeave = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();

	return (
		<>
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>Unprotect</button>
		</>
	);
};

export default PreventLeave;
