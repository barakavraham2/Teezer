import './App.css';
import React from 'react';
import { Container, Content, FlexboxGrid } from 'rsuite';
import DrawerB from './Drawer';
import ContectUs from './comp/ContectUs';
import Home from './comp/Home';
import About from './comp/About';
import { Switch, Route } from 'react-router-dom'
import AppFooter from './views/AppFooter';
import Scroll from 'react-scroll';

function App() {


  return (
    <div className="page">
      <Container className="container" style={{ height: '100%' }}>
        <DrawerB></DrawerB>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <ContectUs />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Container>
      <AppFooter />
    </div>
  );
}

export default App;
