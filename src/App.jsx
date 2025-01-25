import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';
import GetInvolved from './pages/GetInvolved';
import Resources from './pages/Resources';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import Applications from './pages/Applications';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    
    </>
  );
}

export default App;
