//import logo from './logo.svg';
import './App.css';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/inc/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  

  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
             
              <Route path="/" element={<Home />} />
                
              
              <Route  exact path="/about" element={<About />} />
                
                
              <Route exact path="/contact" element={<Contact />} />
        </Routes>      
          
          
      </div>
    </Router> 
  );
}

export default App;
