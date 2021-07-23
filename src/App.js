import './App.css';
import { Container, Content, FlexboxGrid } from 'rsuite';
import DrawerB from './Drawer';
import ContectUs from './comp/ContectUs';
import Home from './comp/Home';
import About from './comp/About';
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
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
  );
}

export default App;
