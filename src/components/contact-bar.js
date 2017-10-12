import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class ContactBar extends Component {
	render() {
	return (
		<Nav className="nav-bar" bsStyle="pills">
			<NavItem href="tel:555-555-5555">Phone</NavItem>
			<NavItem href={"mailto: test@test.com"}>Mail</NavItem>
		</Nav>
		);
	}
}

export default ContactBar;
