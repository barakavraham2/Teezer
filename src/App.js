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
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function App() {


  return (
    <div className="page">
      <Container className="container">
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
      <Bounce bottom>
        <AppFooter />
      </Bounce>
    </div>
  );
}

export default App;
