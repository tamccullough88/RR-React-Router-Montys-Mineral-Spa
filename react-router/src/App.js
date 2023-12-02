import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'




function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          {/* <div className="navBar">
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/packages'>Packages</Link>
              </li>
            </ul>
          </div> */}

          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Link to="/"><Nav.Link as="div" href="/"> Home </Nav.Link></Link>
              </Nav.Item>
              <Nav.Item >
                <Link to="/about"><Nav.Link as="div" eventKey={"about"}>About Us</Nav.Link> </Link>
              </Nav.Item>
              <Nav.Item >
                <Link to="/packages"> <Nav.Link as="div" eventKey={"packagesPage"}> Our Packages</Nav.Link> </Link>
              </Nav.Item>
            </Nav>
          </Container>

        </header>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages packages={packages} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;





