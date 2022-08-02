import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Ensure that the styles from index.css are included.
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

window.addEventListener('load', registerServiceWorker);
