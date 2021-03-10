import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
  <div className='App'>Getting Err Done</div>
  <h2>Whats up! This is my working branch</h2>
  )
};

export default App;
