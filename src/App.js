import './App.css';
import { Container, Content, FlexboxGrid } from 'rsuite';
import DrawerB from './Drawer';

function App() {
  return (
    <Container className="container">
      <DrawerB></DrawerB>
      <Content>
        <div className="headLine">
          <div className="teezer">
            T e e z e r
          </div>
          <div className="comingsoon">
            <p>Coming Soon...</p>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default App;
