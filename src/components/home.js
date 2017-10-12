import React, {Component} from 'react';
import Header from './header';
import InfoBox from './info-box';
import Footer from './footer';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Header />
				<InfoBox />
				<InfoBox />
				<Footer />
			</div>
		);
	}
}

export default Home;
