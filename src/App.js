import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='signup' element={<SignUp />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
