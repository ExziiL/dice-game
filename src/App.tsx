import Spielerprofil from './Components/Spielerprofil';
import LoginWindow from './Components/LoginWindow/LoginWindow';

function App(props: any) {
	return (
		<div className="m-2 App">
			<LoginWindow />
			<Spielerprofil name={props.name} />
		</div>
	);
}

export default App;
