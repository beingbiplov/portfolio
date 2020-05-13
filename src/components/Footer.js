import React from 'react'
import './css/Footer.css'

const Footer = () =>{
	return(
		<div className='footer_section'>
			<a href='https://github.com/beingbiplov'>
				<i className="fab fa-github footer_icons"></i>
			</a>
			<a href='https://www.linkedin.com/in/beingbiplov/'>
				<i className="fab fa-linkedin footer_icons"></i>
			</a>
			<a href='https://twitter.com/BeingBiplov'>
				<i className="fab fa-twitter footer_icons"></i>
			</a>
			<a href='https://dev.to/biplov/'>
				<i className="fab fa-dev footer_icons"></i>
			</a>
			<p className='footer_text'>
				2020 &copy; Biplov
			</p>
		</div>

	)
}
export default Footer