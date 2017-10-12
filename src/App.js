import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Gallery from './components/gallery';
import Menu from './components/menu';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route exact path='/' component={Home}/>
				<Route path='/gallery' component={Gallery}/>
				<Route path='/menu' component={Menu}/>
			</div>
		);
	}
}

export default App;
