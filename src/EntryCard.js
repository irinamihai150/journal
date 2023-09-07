import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Container } from "react-bootstrap"
import axios from "axios"

const EntryCard = () => {
	const [notes, setNotes] = useState([])

	useEffect(() => {
		const fetchNotes = async () => {
			try {
				const response = await axios.get("http://localhost:3500/notes")
				setNotes(response.data)
				console.log(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNotes()
	}, [])
	return (
		<Container>
			<h2> | Create a Note</h2>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicTitle'>
					<Form.Label>Title</Form.Label>
					<Form.Control type='text' placeholder='Enter Title' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicBody'>
					<Form.Label>Body</Form.Label>
					<Form.Control type='text' placeholder=' Enter Note' />
				</Form.Group>
				<Form.Text className='text-muted'>
					Use the form above to create a post. Make sure you fill the required
					title and body fields and then press submit
				</Form.Text>
				<div>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</div>
			</Form>
			<h2>My notes</h2>
			<ul>
				{notes.map((note) => (
					<li key={note._id}>
						Title:{note.title} Body:{note.body}
					</li>
				))}
			</ul>
		</Container>
	)
}

export default EntryCard
