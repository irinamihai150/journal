import "./App.css"
import CustomNav from "./CustomNav"
import EntryCard from "./EntryCard"
import Header from "./Header"


const Home = () => {
	return (
		<div>
			<div className='app-container'>
				<CustomNav />
				<Header />
				<EntryCard />
			</div>
		</div>
	)
}

export default Home
