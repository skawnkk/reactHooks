function Confirm() {
	const useConfirm = (message, callback, reject) => {
		if (!callback || typeof callback !== 'function') {
			return;
		}
		if (reject && typeof reject !== 'function') {
			return;
		}
		const confirmAction = () => {
			if (window.confirm(message)) {
				callback();
			} else {
				reject();
			}
		};
		return confirmAction;
	};
	const deleteAction = () => {
		console.log('Deleted!');
	};
	const cancelAction = () => {
		console.log('Canceled.');
	};
	const confirmFunc = useConfirm(
		'Are you really delete this document?',
		deleteAction,
		cancelAction,
	);
	return <button onClick={confirmFunc}>Delete</button>;
}

export default Confirm;
