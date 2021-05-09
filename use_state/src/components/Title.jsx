import { useState, useEffect } from 'react';

const useTitle = (initialTitle) => {
	const [title, setTitle] = useState(initialTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};

function Title() {
	const titleUpdater = useTitle('Loading');
	setTimeout(() => titleUpdater('HOME'), 3000);
	//return : setTitle,
	//React Hook "useTitle" cannot be called inside a callback.
	return null;
}

export default Title;
