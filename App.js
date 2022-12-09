import './App.css';
import './test.css'
import {Navbar,Container,Nav} from 'react-bootstrap'
import ForYou from './Components/djo';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <ForYou/>
      
   </div>
  );
}

export default App;
