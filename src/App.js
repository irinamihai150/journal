import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import ProfilePage from "./ProfilePage"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/profile' element={<ProfilePage />} />
				{/* <ToastContainer/> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App
