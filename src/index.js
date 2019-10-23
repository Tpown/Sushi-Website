import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './Components/Logo/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Logo />, document.getElementById('root'));

serviceWorker.unregister();
