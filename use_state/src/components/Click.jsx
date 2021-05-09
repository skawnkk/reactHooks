import { useRef, useEffect } from 'react';

function Click() {
	const useClick = () => {
		const sayHello = () => {
			console.log('hello');
		};
		const ref = useRef();
		useEffect(() => {
			const element = ref.current;
			//componentDidMount (이벤트생성, 마운트될때 단한번 실행됨)
			if (element) {
				element.addEventListener('click', sayHello);
			}
			//componentWillUnMount ([]->마운트가 완료되고 마운트되지않을때)
			return () => {
				console.log('unmount');
				if (element) {
					element.removeEventListener('click', sayHello);
				}
			};
		}, []); //componentDidMount, componentDidUpdate

		return ref;
	};

	const title = useClick(); //return : element(ref)
	return <h1 ref={title}>Click</h1>;
}

export default Click;
