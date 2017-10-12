import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router} from 'react-router-dom'; /* BrowserRouter = server rendered, HashRouter is static */

ReactDOM.render ((
	<Router>
		<App />
	</Router>
	), document.getElementById('root'));

registerServiceWorker();
