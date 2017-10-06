import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Topics from './Topics.jsx';
import '../styles/Main.scss';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
    </Switch>
  </main>
);

export default Main;
