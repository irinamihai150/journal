import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Container } from "react-bootstrap"

const EntryCard = () => {
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
		</Container>
	)
}

export default EntryCard
