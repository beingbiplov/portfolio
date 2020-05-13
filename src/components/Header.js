import React from 'react'
import './css/Header.css'

const Header = () =>{
	return(
		<div className='Intro_section' id='Intro_section'>
			<p className='intro_opening'> !Hi, my name is </p>
			<h3 className='intro_name'>Biplov </h3>
			<h3 className='intro_closing'>I build things for the web. </h3>
			<p className='intro_about'>
				I'm a fullstack developer based in Kahmandu, Nepal. I build websites, applications 
				and all that sort of things.
			</p>
			<div className='git_section'>
				<a className='git_button' href='mailto:sharmabiplov@gmail.com'> Get In Touch </a>
			</div>
		</div>
		)
}

export default Header