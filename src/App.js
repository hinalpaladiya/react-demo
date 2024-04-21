import logo from './logo.svg';
import './App.css';
import Restaurant from './Component/Restaurant';
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect';
import Reducer from './Hooks/Reducer';
function App() {
	return (
		<>
			<Reducer />
			{/* <UseState/> */}
			{/* <Restaurant /> */}
			{/* <p>Hello World</p> */}
		</>
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>
	);
}

const MyName = () => {
	return (
		<>
			Hello HMP
		</>
	)
}

export default App;
