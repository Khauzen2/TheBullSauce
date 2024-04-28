//import logo from './logo.svg';
import './App.css';
import Home from './Components/pages/Home';
import Shop from './Components/pages/Shop';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/inc/Navbar';
import Footer from './Components/inc/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  

  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
             
              <Route path="/" element={<Home />} />

              <Route path="/shop" element={<Shop />} />
              
              <Route path="/about" element={<About />} />
                
              <Route path="/contact" element={<Contact />} />
        </Routes>      
        <Footer />  
          
      </div>
    </Router> 
  );
}

export default App;
