import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import InfoBox from '../shared/info-box';

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
