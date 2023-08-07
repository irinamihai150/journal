import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import "./App.css"

const CustomNav = () => {
	return (
		<div className='custom-nav'>
			<Navbar expand='lg'>
				<Container>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse
						id='basic-navbar-nav'
						className='justify-content-start'
					>
						<Nav className='me-auto'>
							<Nav.Link href='login'>Log In</Nav.Link>
							<Nav.Link href='logout'>Sign Out</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default CustomNav
