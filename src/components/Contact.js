import React from 'react'
import './css/Contact.css'
import { Container } from 'react-bootstrap'

const Contact = () =>{
	return(
		<Container className='contact_section' id='contact'>
			<h3 className='contact_title'>
				Get In Touch
			</h3>
			<div className='contact'>
				<p className='contact_text'>
					I'm currently open to new opportunities. Whether you need 
					some help or want to collaborate, just leave a message and I will
					get back to you as soon as possible. 
				</p>
				<div className='git_section'>
				<a className='git_button' href='mailto:sharmabiplov@gmail.com'> Let's Talk </a>
			</div>

			</div>
		</Container>

	)
}
export default Contact