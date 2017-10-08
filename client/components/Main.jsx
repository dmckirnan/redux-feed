import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import TopicsContainer from '../containers/TopicsContainer.jsx';
import '../styles/Main.scss';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={TopicsContainer} />
    </Switch>
  </main>
);

export default Main;
