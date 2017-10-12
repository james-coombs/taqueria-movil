import React, {Component} from 'react';
import Header from '../header/header';
import InfoBox from '../shared/info-box';
import Footer from '../footer/footer';

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
