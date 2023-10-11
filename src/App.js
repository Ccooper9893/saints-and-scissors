import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar>
      <div className='bgimg-1'></div>
      <div className='bgimg-2'></div>
      <div className='bgimg-3'></div>
      <div className='bgimg-4'></div>
      <Footer />
      </Navbar>
    </div>
  );
}

export default App;
