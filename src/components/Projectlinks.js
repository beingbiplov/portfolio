import React from 'react'
import './css/projectlinks.css'
import { Container, Row, Col } from 'react-bootstrap'

const Projectlinks = (props) => {
	return(
		<Container>
			<Row className='link_section'>
				<Col md={6} className='link'>
					<a className='link_button' href={ props.demolink }> Live Demo </a>
				</Col>
				<Col md={6}>
					<a className='link_button' href={ props.githublink }> Github repo </a>					
				</Col>
			</Row>
		</Container>
	)
}
export default Projectlinks