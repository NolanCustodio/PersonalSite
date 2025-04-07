import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './components/App';
import projectCarouselReducer from './features/projectCarousel';
import windowInfoReducer from './features/windowInfo'

const store = configureStore({
  reducer: {
    // projectCarousel: projectCarouselReducer,
    windowInfo: windowInfoReducer,
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

