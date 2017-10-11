import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home.jsx';
import Topics from './views/Topics.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
    </Switch>
  </main>
);

export default Main;
