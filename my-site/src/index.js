import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './components/App';
// import {projectReducer, projectCounterReducer} from './features/project'
import { projectCounterReducer } from './features/project'


const store = configureStore({
  reducer: {
    // project: projectReducer,
    projectCounter: projectCounterReducer
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

