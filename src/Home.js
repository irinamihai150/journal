import "./App.css"
import CustomNav from "./CustomNav"
import Header from "./Header"
import { ToastContainer } from "react-toastify"



const Home = () => {
	return (
		<div>
			<div className='app-container'>
				<CustomNav />
				<Header />
				 <ToastContainer/> 
			</div>
		</div>
	)
}

export default Home
