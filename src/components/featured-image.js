import React, { Component } from 'react';
import Image from 'react-bootstrap/lib/Image';
import taco from '../assets/taco-plate.jpg';

class FeaturedImage extends Component {
	render() {
		return (
			<Image src={taco} alt="Taco Plate" responsive />
		);
	}
}

export default FeaturedImage;
