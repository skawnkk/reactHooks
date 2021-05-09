import './App.css';
import Input from './components/Input';
import Tabs from './components/Tabs';
import Title from './components/Title';
import Click from './components/Click';
import Confirm from './components/Confirm';
import PreventLeave from './components/PreventLeave';
import BeforeLeave from './components/BeforeLeave';
function App() {
	return (
		<>
			<div>💎Title: 브라우져 타이틀을 봐바요 Loading -> Home!</div>
			<Title />

			<div>💎Confirm: 삭제 확인메시지!</div>
			<Confirm />

			<div>💎Input: 인풋을 채워봐용 10글자 제한임 ㅎㅎ</div>
			<Input />

			<div>💎Tabs:클릭한 탭의 내용으로 바뀌어요!</div>
			<Tabs />

			<div>💎Click: 클릭하면 console에서 메시지를 확인할 수 있어요.</div>
			<Click />

			<div>💎PreventLeave : protect클릭->화면 종료 재확인</div>
			<PreventLeave />

			<div>
				💎BeforeLeave : 마우스를 상단으로 가져가면 가지말라는 console msg를
				확인할수있어요
				<BeforeLeave />
			</div>
		</>
	);
}

export default App;
