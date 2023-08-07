import React, { useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
const handlePasswordChange = (e) => {
  setPassword(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  console.log("Email: ", email)
  console.log("Password: ", password)
}
	return (
		<Container>
			<h2>LogIn</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='email'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						value={password}
						onChange={handlePasswordChange}
						required
					/>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</Container>
	)
}

export default Login
