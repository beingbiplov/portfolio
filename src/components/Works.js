import React from 'react'
import './css/Works.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import sampadakThumbnail from './assets/work_images/sampadak.png'
import weatherappThumbnail from './assets/work_images/weatherapp.png'
import postalcodesThumbnail from './assets/work_images/postalcodes_nepal.png'

import Tags from './Tags'
import Projectlinks from './Projectlinks'

const Works = () =>{
	return(
		<Container className='works_section' id='works_section'>
			<h3 className='works_title'>
				My Works
			</h3>
			<Row className='project'>
				<Col md={5} className='project_thumbnail'>
					<a href='https://beingbiplov.github.io/Sampadak/'>
						<Image className='work_thumbnail' src={sampadakThumbnail} />
					</a>
				</Col>
				<Col md={7} className='project_info'>
					<h4 className='project_title'> Sampadak: Online Markdown Editor </h4>
					<Tags tags = {['HTML/CSS','JavaScript', 'jQuery']} />
					<p className='project_description'>
						Sampadak is an online Markdown editor with the live Markdown-to-html preview support.
						You can export your document as a Markdown, a HTML file or a PDF file.
						You can also import your Markdowm file and get  started right away.
					</p>
					<p className='project_description'>
						It is created using HTML/CSS, JavaScript, jQuery and 
						some awesome open source projects like <a className='paragraph_link' href = 'https://github.com/showdownjs/showdown'>Showdownjs</a> and <a className='paragraph_link' href='https://codemirror.net'> codemirror </a>
					</p>
					<Projectlinks demolink='https://beingbiplov.github.io/Sampadak/' githublink='https://github.com/beingbiplov/Sampadak/' />

					
				</Col>
			</Row>

			<Row className='project'>	
				<Col md={7} className='project_info'>
					<h4 className='project_title'> Weather App </h4>
					<Tags tags = {['Django','HTML/CSS', 'Bootstrap']} />
					<p className='project_description'>
						This application shows weather conditions from cities around the world.
						You can search any cities to see the current weather conditions.
					</p>
					<p className='project_description'>
						This application is created using Python's Django Framework and makes use 
						of <a className='paragraph_link' href='https://openweathermap.org/api'> openweathermap API </a>
						to fetch realtime weather data. 
					</p>
					<Projectlinks demolink='http://weatherlive.herokuapp.com/' githublink='#' />

					
				</Col>
				<Col md={5} className='project_thumbnail'>
					<a href='http://weatherlive.herokuapp.com/'>
						<Image className='work_thumbnail' src={weatherappThumbnail} />
					</a>
				</Col>
			</Row>

			<Row className='project'>
				<Col md={5} className='project_thumbnail'>
					<a href='https://pypi.org/project/postalcodes-nepal/'>
						<Image className='work_thumbnail' src={postalcodesThumbnail} />
					</a>
				</Col>
				<Col md={7} className='project_info'>
					<h4 className='project_title'> postalcodes-nepal </h4>
					<Tags tags = {['Python']} />
					<p className='project_description'>
						postalcodes-nepal is a python package that helps you to work with postal codes (Zip codes) of Nepal.
						
						
					</p>
					<p className='project_description'>
						This python package  allows to query postal codes, check whether a postal code is valid,
						find post office information and more. You can visit it's <a className='paragraph_link' href ='https://pypi.org/project/postalcodes-nepal/'> Python Package Index (PyPI) </a> 
						page for more information and instructions.
					</p>
					<Projectlinks demolink='https://pypi.org/project/postalcodes-nepal/' githublink='https://github.com/beingbiplov/postalcodes-nepal/' />

					
				</Col>
			</Row>
			<div className='myworks_outro'>
				You can visit my <a className='paragraph_link' href='https://github.com/beingbiplov/'> GitHub profile </a> for more of my works.
			</div>

		</Container>
	)
}

export default Works