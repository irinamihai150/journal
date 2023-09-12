import { useRef, useState, useEffect, useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import AuthContext from "./context/AuthProvider"
import { useLoginMutation } from "./slices/usersApiSlice"
import { setCredentials } from "./slices/authSlice"

import axios from "./api/axios"
import { LOGIN_URL } from "./config"

const Login = () => {
	const { setAuth } = useContext(AuthContext)
	const userRef = useRef()
	const passwordRef = useRef()
	const errRef = useRef()
	const [user, setUser] = useState("")
	const [pwd, setPwd] = useState("")
	const [errMsg, setErrMsg] = useState("")
	const [success, setSuccess] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	useEffect(() => {
		if (userRef.current) {
			userRef.current.focus()
		}
	}, [])

	useEffect(() => {
		setErrMsg("")
	}, [user, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ user, pwd }),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			)
			const accessToken = response?.data?.accessToken
			const roles = response?.data?.roles
			setAuth({ user, pwd, roles, accessToken })
			setUser("")
			setPwd("")
			setSuccess(true)
		} catch (err) {
			if (!err.response) {
				setErrMsg("No Server Response")
			} else if (err.response?.status === 400) {
				setErrMsg("Missing Username or Password")
			} else if (err.response?.status === 401) {
				setErrMsg("Unauthorized")
			} else {
				setErrMsg("Login Failed")
			}
			if (passwordRef.current) {
				passwordRef.current.focus()
			}
		}
	}

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	return (
		<section>
			{success ? (
				<>
					<h1>You are logged in</h1>
					<br />
					<p>
						<Link to='/profile'>Home</Link>
					</p>
				</>
			) : (
				<>
					<p
						ref={errRef}
						className={errMsg ? "errMsg" : "offscreen"}
						aria-live='assertive'
					>
						{errMsg}
					</p>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor='username'>Username:</label>
						<input
							type='text'
							id='username'
							ref={userRef}
							placeholder='Enter username'
							autoComplete='off'
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
						/>
						<label htmlFor='password'>Password:</label>
						<input
							type={showPassword ? "text" : "password"}
							id='password'
							autoComplete='off'
							placeholder='Enter password'
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
							ref={passwordRef}
						/>

						<button type='button' onClick={togglePasswordVisibility}>
							{showPassword ? "Hide Password" : "Show Password"}
						</button>
						<button>Sign In</button>
					</form>
					<p>
						Need an account? <br />
						<span className='line'>
							<Link to='/signup'>Sign Up</Link>
						</span>
					</p>
				</>
			)}
		</section>
	)
}

export default Login
