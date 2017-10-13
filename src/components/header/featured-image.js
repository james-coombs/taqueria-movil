import React, { Component } from 'react';
import Image from 'react-bootstrap/lib/Image';
import taco from '../../assets/taco-plate.jpg';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class FeaturedImage extends Component {
	render() {
		return (
			<Grid>
				<Row className="mission-statement-row">
					<Col sm={12}><Image alt="Taco Plate" responsive /></Col>
				</Row>
			</Grid>
		);
	}
}

export default FeaturedImage;
// <Image src={taco} alt="Taco Plate" responsive />