// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import channelsReducer from './reducers/channels_reducer';
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';

const initialState = {
  // TODO
  channels: ['general', 'react', 'paris' ],
  messages: [],
  currentUser:  'Tonio' || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};


// State and reducers
const reducers = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer,
});

const middlewares = applyMiddleware(logger, reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
