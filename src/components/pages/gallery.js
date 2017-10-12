import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Lightbox from 'react-images';
import Container from 'react-photo-container';

class PhotoGallery extends Component {
	render() {
		const PHOTO_SET = [
			{
				src: 'https://placebear.com/500/500',
				width: 500,
				height: 500,
				aspectRatio: 1,
				lightboxImage:{
					src: 'https://placebear.com/500/500',
					// srcset: [
					// 	'http://example.com/example/img1_1024.jpg 1024w',
					// 	'http://example.com/example/img1_800.jpg 800w',
					// 	'http://example.com/example/img1_500.jpg 500w',
					// 	'http://example.com/example/img1_320.jpg 320w',
					// ]
				}
			},
			{
				src: 'https://placebear.com/500/500',
				width: 500,
				height: 500,
				aspectRatio: 1,
				lightboxImage:{
					src: 'https://placebear.com/500/500',
					// srcset: [
					// 	'http://example.com/example/img1_1024.jpg 1024w',
					// 	'http://example.com/example/img1_800.jpg 800w',
					// 	'http://example.com/example/img1_500.jpg 500w',
					// 	'http://example.com/example/img1_320.jpg 320w',
					// ]
				}
			}
		];
		return (
			<div>
				<Header />
				<Container photos={PHOTO_SET} />
				<Footer />
			</div>
		);
	}
}

export default PhotoGallery;
