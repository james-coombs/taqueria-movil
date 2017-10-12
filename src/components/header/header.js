import React, { Component } from 'react';
import NavBar from './nav-bar';
import FeaturedImage from './featured-image';
import ContactBar from './contact-bar';
import HeaderText from './header-text';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<NavBar />
				<HeaderText />
				<FeaturedImage />
			</div>
		);
	}
}

export default Header;
