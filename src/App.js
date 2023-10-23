import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Stylists from './components/pages/Stylists';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
// import Booking from './components/pages/Booking';
import './App.css';

function App() {

  return (
    <main>
      <Navbar >
          <Home />
          <About />
      </Navbar>

    </main>
  );
};

export default App;