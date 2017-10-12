import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class InfoBox extends Component {
	render() {
		function handleSelect(selectedKey) {
		alert('selected ' + selectedKey);
	}

	const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

	return (
		<Grid>
			<Row className="mission-statement-row">
				<Col sm={12}><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
			</Row>
		</Grid>
		);
	}
}

export default InfoBox;
