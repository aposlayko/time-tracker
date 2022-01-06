import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,  
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ActivityPage from './components/activity-page/ActivityPage';
import Habbits from './components/Habbits';
import Analytics from './components/Analytics';
import Settings from './components/Settings';


import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#activities">Time tacker</Navbar.Brand>
            <Nav className="me-auto">              
              <LinkContainer to='/'>
                <Button variant='link'>Activities</Button>
              </LinkContainer>
              <LinkContainer to='/habbits'>
                <Button variant='link'>Habbits</Button>
              </LinkContainer>
              <LinkContainer to='/analytics'>
                <Button variant='link'>Analytics</Button>
                </LinkContainer>
              <LinkContainer to='/settings'>
                <Button variant='link'>Settings</Button>
              </LinkContainer>              
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<ActivityPage />} />
          <Route path="/habbits" element={<Habbits />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
