import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import References from './components/References'
import Venues from './components/Venues'
import Clients from './components/Clients'
import Footer from './components/Footer'
import ServiceRequestPage from './components/ServiceRequestPage'
import EmploymentPage from './components/EmploymentPage'
import TeamPage from './components/TeamPage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Clients />
              <AboutUs />
              <Services />
              <References />
              <Venues />
            </main>
          } />
          <Route path="/request-service" element={<ServiceRequestPage />} />
          <Route path="/join-our-team" element={<EmploymentPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Legacy Spanish routes for backward compatibility */}
          <Route path="/solicitar-servicio" element={<ServiceRequestPage />} />
          <Route path="/trabajar-con-nosotros" element={<EmploymentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App