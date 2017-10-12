import React, {Component} from 'react';
import Header from './header';
import InfoBox from './info-box';
import Footer from './footer';


class Menu extends Component {
	render() {
		return (
			<div className="home">
				<Header />
				<InfoBox />
				<Footer />
			</div>
		);
	}
}

export default Menu;
