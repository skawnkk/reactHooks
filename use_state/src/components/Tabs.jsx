import { useState } from 'react';
const content = [
	{ tab: 'Section1', content: 'Sleepy' },
	{ tab: 'Section2', content: 'you have to study....' },
];

function Tabs() {
	const useTab = (initialTab, allTabs) => {
		const [currentIndex, setCurrentIndex] = useState(initialTab);

		return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
	};

	const { currentItem, changeItem } = useTab(0, content);
	return (
		<>
			{content.map((item, idx) => (
				<button key={idx} onClick={() => changeItem(idx)}>
					{item.tab}
				</button>
			))}
			<div>{currentItem.content}</div>
		</>
	);
}

export default Tabs;
