import React from 'react';

import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import '../styles/App.scss';

const App = () => (
  <div>
    <Navbar />
    <div className="spacer">&nbsp;</div>
    <Main />
  </div>
);

export default App;
