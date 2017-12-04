// @flow
// Framework
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

// Components
import { Row, Col } from 'reactstrap';

import LoadingComponent from './common/LoadingComponent';

import { AppContainer, Logo } from './AppLayout.style';

import logo from './../img/logo.svg';

const AsyncNavigationContainer = Loadable({
  loader: () => import('./common/navigation/NavigationContainer'),
  loading: LoadingComponent
});
const AsyncHomeContainer = Loadable({
  loader: () => import('./pages/home/HomeContainer'),
  loading: LoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: LoadingComponent
});

const navigationItems = [
  { label: 'Home', path: '/' }
];

/**
 * Main rendering entry point for the app.
 *
 * @returns {Element} Stateless functional React component.
 */
const AppLayout = ({ children }) => (
  <div className="App">
    <AppContainer>
      <Row className="bg-faded">
        <Col sm={2}>
          <Logo src={logo} alt="logo" className="img-fluid" fluid />
        </Col>
        <Col>
          <AsyncNavigationContainer navigationItems={navigationItems} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Switch>
            <Route exact path="/" component={AsyncHomeContainer} />
            <Route path="*" component={AsyncNotFound} />
          </Switch>
        </Col>
      </Row>
      <Row>
        <Col>
          <footer className="py-1 text-center">
          </footer>
        </Col>
      </Row>
    </AppContainer>
  </div>
);

export default AppLayout;
