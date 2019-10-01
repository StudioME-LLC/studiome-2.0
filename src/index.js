import React from 'react';
import ReactDOM from 'react-dom';


import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// States & Reducers
import onRentalButton from './redux/reducers';



const store = createStore(
	onRentalButton,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render( app, document.getElementById('root'));
