import React from 'react';
import { Provider } from 'react-redux';

import Home from '../pages/containers/home';
import Store from './Store.js';


const AppProvider = () => {
  return (
    <Provider store={ Store }>
      <Home />
    </Provider>
  )
}

export default AppProvider;