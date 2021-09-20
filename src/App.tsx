import React from 'react';
import {Provider} from 'react-redux';

import store from './reduxStore/store';
import DashBoard from './screens/dashBoard';

const App = () => {
  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
};

export default App;
