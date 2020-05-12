import React, { useState } from 'react'
import './css/Skills.css'
import { Container, Row, Col, Image } from 'react-bootstrap'


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/skills_icon', false, /\.(png|jpe?g|svg)$/));

const Skills = () =>{
	const [skills] = useState([
			{'name':'Python', 'icon':images['python.svg']},
			{'name':'Django', 'icon':images['django.svg']}, 
			{'name':'JavaScript', 'icon':images['javascript.svg']}, 
			{'name':'Reactjs', 'icon':images['react.svg']},
			{'name':'HTML/CSS', 'icon':images['htmlcss.png']},
			{'name': 'Bootstrap', 'icon': images['bootstrap.svg']},
			{'name': 'Git', 'icon': images['git.svg']},
			{'name': 'REST API', 'icon': images['restapi.png']}
			
		])

	const skillset = skills.map((skill, index) => 
			<Col lg={3} md={4} sm={6} key={index}>
				<div className='skills' > 
					{skill.name}
					<Image className='icons' src={skill.icon} />
				</div>
			</Col>
		)
	return(
		<Container className='skills_section' id='skills_section'>
			<h3 className='skills_title'>
				Skills
			</h3>
			<Row>
				
					{skillset}
			
			</Row>
		</Container>
	)
}
export default Skills