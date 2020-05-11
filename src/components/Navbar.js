import React from 'react'
import './css/Navbar.css'
import { Navbar } from 'react-bootstrap'


const NavigationBar = () => {
	return(
		<div className="container" id='navbar_section'>
		    <Navbar className="navbar  py-3" expand='md'>
		        <Navbar.Brand href="#navbar_section">BIPLOV</Navbar.Brand>
		         <Navbar.Toggle aria-controls="basic-navbar-nav" >
		         	<i className="fa fa-bars"></i>
		         </Navbar.Toggle>
		   
	            <Navbar.Collapse id="basic-navbar-nav">
	                <ul className="navbar-nav ml-auto">
	                    <li className="nav-item active"><a href="#about_section" className="nav-link text-uppercase">About <span className="sr-only">(current)</span></a></li>
	                    <li className="nav-item"><a href="#skills_section" className="nav-link text-uppercase">Skills</a></li>
	                    <li className="nav-item"><a href="#" className="nav-link text-uppercase">Work</a></li>
	                    <li className="nav-item"><a href="#" className="nav-link text-uppercase">Contact</a></li>
	                </ul>
	            </Navbar.Collapse>

		        
		    </Navbar>
		</div>
	)
}

export default NavigationBar