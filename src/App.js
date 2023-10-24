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
  const [currentPage, setCurrentPage] = useState('Home');

  const availablePages = ['Home', 'About', 'Services', 'Stylists', 'Gallery', 'Contact'];

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home handlePageChange={handlePageChange}></Home>;
      case 'About':
        return <About handlePageChange={handlePageChange}></About>
      case 'Services':
        return <Services handlePageChange={handlePageChange}></Services>
      case 'Stylists':
        return <Stylists handlePageChange={handlePageChange}></Stylists>
      case 'Gallery':
        return <Gallery handlePageChange={handlePageChange}></Gallery>
      case 'Contact':
        return <Contact handlePageChange={handlePageChange}></Contact>
      default:
        break;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} availablePages={availablePages}>
          {renderPage()}
          {/* Uncomment for 1 page scroll */}
          {/* <About />
          <Services /> */}
      </Navbar>

    </main>
  );
};

export default App;