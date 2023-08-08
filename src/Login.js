import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Login = () => {
	const userRef = useRef()
	const errRef = useRef() // Corrected line
	const [user, setUser] = useState("")
	const [pwd, setPwd] = useState("")
	const [errMsg, setErrMsg] = useState("")
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		userRef.current.focus()
	}, [])

	useEffect(() => {
		setErrMsg("")
	}, [user, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(user, pwd)
		setUser("")
		setPwd("")
		setSuccess(true)
	}

	return (
		<section>
			{success ? (
				<>
					<h1>You are logged in</h1>
					<br />
					<p>
						<a href='#'>Go to home</a>
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
							type='password'
							id='password'
							autoComplete='off'
							placeholder='Enter password'
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
						/>
						<button>Sign In</button>
					</form>
					<p>
						Need an account ? <br />
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
