import { Routes, Route,useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
import LoadingSpinner from './components/LoadingSpinner';
import InitiativeDetail from './pages/InitiativeDetail';
import EventRegistration from './pages/EventRegistration';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating loading time
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
    <LoadingSpinner loading={loading} />
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/initiatives/:id" element={<InitiativeDetail />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/events/register" element={<EventRegistration />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    
    </>
  );
}

export default App;
