import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import {Link} from 'react-router-dom';
import ContactBar from './contact-bar';

class NavBar extends Component {
	render() {
	return (
		<Navbar collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="#">React-Bootstrap</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<ContactBar />
				<Nav pullRight>
					<NavItem><Link to='/'>Home</Link></NavItem>
					<NavItem><Link to='/gallery'>Gallery</Link></NavItem>
					<NavItem><Link to='/menu'>Menu</Link></NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		);
	}
}

export default NavBar;
