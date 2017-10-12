import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Col from 'react-bootstrap/lib/Col';

class ContactBar extends Component {
	render() {
		return (
			<Nav className="contact-bar" bsStyle="pills" pullLeft >
				<NavItem href="tel:555-555-5555">Phone</NavItem>
				<NavItem href={"mailto: test@test.com"}>Email</NavItem>
			</Nav>
		);
	}
}

export default ContactBar;
