import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Lightbox from 'react-images';
import Container from 'react-photo-container';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class PhotoGallery extends Component {
	render() {
		const displayOptions = [
			{
				width: 480,
				photoNb: 1
			},
			{
				width: 768,
				photoNb: 3
			},
			{
				width: 1024,
				photoNb: 4
			}
		];

		const photoSet = [
			{
				src: 'https://placebear.com/100/100',
				width: 100,
				height: 100,
				aspectRatio: 1,
				lightboxImage:{
					src: 'https://placebear.com/100/100',
					// srcset: [
					// 	'http://example.com/example/img1_1024.jpg 1024w',
					// 	'http://example.com/example/img1_800.jpg 800w',
					// 	'http://example.com/example/img1_320.jpg 320w',
					// ]
				}
			},
			{
				src: 'https://placebear.com/100/100',
				width: 100,
				height: 100,
				aspectRatio: 1,
				lightboxImage:{
					src: 'https://placebear.com/100/100'
				}
			},
			{
				src: 'https://placebear.com/100/100',
				width: 100,
				height: 100,
				aspectRatio: 1,
				lightboxImage:{
					src: 'https://placebear.com/100/100'
				}
			},
			{
				src: 'https://placebear.com/100/100',
				width: 100,
				height: 100,
				aspectRatio: 1,
				lightboxImage:{
					src: 'https://placebear.com/100/100'
				}
			},
			{
				src: 'https://placebear.com/100/100',
				width: 100,
				height: 100,
				aspectRatio: 1,
				lightboxImage:{
					src: 'https://placebear.com/100/100'
				}
			},
			{
				src: 'https://placebear.com/100/100',
				width: 100,
				height: 100,
				aspectRatio: 1,
				lightboxImage:{
					src: 'https://placebear.com/100/100'
				}
			},
		];
		return (
			<div>
				<Header />
					<Grid className="text-center">
						<Row>
							<Col sm={12}>
								<Container custom={displayOptions} photos={photoSet} lightboxShowImageCount={true} />
							</Col>
						</Row>
					</Grid>
				<Footer />
			</div>
		);
	}
}

export default PhotoGallery;
