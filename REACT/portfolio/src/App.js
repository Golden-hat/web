import Header from './Elements/Header'
import TopBar from './Elements/topBar'
import AboutMe from './Elements/AboutMe'
import "./style.css"

function App() {
	return (
		<div className = "App">
			<div className = "topBackground">
				<TopBar/>
				<Header/>
			</div>
				<AboutMe/>
		</div>
	);
}

export default App;
