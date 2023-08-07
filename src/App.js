
import "./App.css"
import CustomNav from "./CustomNav"
import EntryCard from "./EntryCard"
import Header from "./Header"

function App() {
	return (
		<div className="app-container">
			<CustomNav />
			<Header />
      <EntryCard/>
		</div>
	)
}

export default App
