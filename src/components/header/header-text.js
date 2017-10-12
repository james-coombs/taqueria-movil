import React, { Component } from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class HeaderText extends Component {
	render() {
		return (
			<Grid>
				<Row className="mission-statement-row">
					<PageHeader>Example page header <small>Subtext for header</small></PageHeader>
				</Row>
			</Grid>
		);
	}
}

export default HeaderText;
