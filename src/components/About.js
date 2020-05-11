import React from 'react'
import './css/About.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import about_image from './assets/about_image.jpg'

const About = () =>{
	return(
		<Container className='about' id='about_section'>
			<h3 className='about_title'>
					About Me
				</h3>
			<Row>
				<Col md={7}>
					<p>
					  Hello! I'm Biplov, a fullstack developer based in Kathmandu, Nepal.
					</p>
					<p>
					  I enjoy building things for the web, mostly with Django and JavaScript, but picking up
					  a new language or framework is not a problem. 
					  
					</p>
					<p>
						I am a Computer Science student with diverse set of skills, ranging
						from HTML/CSS + JavaScript, all the way to Django and React, and I am
						comfortable developing on the backend as well as frontend.
					</p>
				</Col>
				<Col md={5}>
					<div className='about_section_image'>
						<a href='https://github.com/beingbiplov'>
							<Image className='about_image' src={about_image} rounded />
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	)

}
export default About