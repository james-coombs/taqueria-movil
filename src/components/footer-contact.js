import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import React, { Component } from 'react';

class FooterContact extends Component {
	render() {
	return (
		<Nav className="nav-bar" bsStyle="pills" justified>
			<NavItem href="tel:555-555-5555">Phone</NavItem>
			<NavItem href={"mailto: test@test.com"}>Mail</NavItem>
		</Nav>
		);
	}
}

export default FooterContact;
