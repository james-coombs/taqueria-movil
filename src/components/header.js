import React, { Component } from 'react';
import NavBar from './nav-bar';
import FeaturedImage from './featured-image';
import ContactBar from './contact-bar';

class Header extends Component {
	render() {
	return (
		<div className="header">
			<NavBar />
			<FeaturedImage />
		</div>
		);
	}
}

export default Header;
