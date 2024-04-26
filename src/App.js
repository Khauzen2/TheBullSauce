//import logo from './logo.svg';
import './App.css';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/inc/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'; 

function App() {
  

  
  return (
    <Router>
      <div>
        <Navbar />
        
          
        <Home />
        <About />
        <Contact />
        
          
        
        
      </div>
    </Router>  
  );
}

export default App;
