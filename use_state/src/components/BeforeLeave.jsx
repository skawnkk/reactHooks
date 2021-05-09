import { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
	useEffect(() => {
		const handle = (event) => {
			const { clientY } = event;
			if (clientY <= 0) onBefore();
		};
		document.addEventListener('mouseleave', handle); //mousemove
		return () => {
			document.removeEventListener('mouseleave', handle);
		};
	});
};

function BeforLeave() {
	const begForLife = () => console.log('Plz, dont Leave');
	useBeforeLeave(begForLife);
	return null;
}

export default BeforLeave;
