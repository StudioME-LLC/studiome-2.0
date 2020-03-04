import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

// States & Reducers
import onRentalButton from './redux/reducers';

// Apollo client setup
const client = new ApolloClient({
	uri: 'https://studiome-analytics-server.herokuapp.com/graphql',
})

const store = createStore(
	onRentalButton,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const app = (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>
)

ReactDOM.render( app, document.getElementById('root'));

serviceWorker.register();