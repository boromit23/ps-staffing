import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    
    // Si no estamos en la página principal, navegamos a ella primero
    if (location.pathname !== '/') {
      navigate('/')
      // Esperamos un poco para que la página cargue y luego hacemos scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Si ya estamos en la página principal, hacemos scroll directo
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:17039498462" className="flex items-center space-x-1 hover:text-red-200">
              <Phone size={14} />
              <span>(D) 703 - 949 8462</span>
            </a>
            <a href="tel:15713133345" className="flex items-center space-x-1 hover:text-red-200">
              <Phone size={14} />
              <span>(O) 571 - 313 3345</span>
            </a>
            <a href="mailto:booking@pstaffing.services" className="flex items-center space-x-1 hover:text-red-200">
              <Mail size={14} />
              <span>booking@pstaffing.services</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>501 Church Street Northeast, Vienna, VA 22180</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/images/logo-01.png" 
                alt="Professional Staffing Services" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden">
                <div className="flex items-center space-x-2">
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                    PS
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">Professional Staffing</h1>
                    <p className="text-sm text-red-600">Services</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('references')}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                References
              </button>
              <Link
                to="/team"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Our Team
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/request-service"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Request Service
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-red-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-red-600 font-medium text-left transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  onClick={() => {
                    scrollToSection('about')
                    setIsMenuOpen(false)
                  }}
                  className="text-gray-700 hover:text-red-600 font-medium text-left transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection('services')
                    setIsMenuOpen(false)
                  }}
                  className="text-gray-700 hover:text-red-600 font-medium text-left transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection('references')
                    setIsMenuOpen(false)
                  }}
                  className="text-gray-700 hover:text-red-600 font-medium text-left transition-colors"
                >
                  References
                </button>
                <Link
                  to="/team"
                  className="text-gray-700 hover:text-red-600 font-medium text-left transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-red-600 font-medium text-left transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/request-service"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request Service
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
