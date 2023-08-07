import { Container } from "react-bootstrap"
import React from "react"
import "./App.css"

const Header = () => {
	return (
		<Container className='header'>
			<h1>Digital Journal</h1>
			<h2> | Create a Note</h2>
		</Container>
	)
}

export default Header
