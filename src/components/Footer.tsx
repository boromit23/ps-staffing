import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                PS
              </div>
              <div>
                <h3 className="text-lg font-bold">Professional Staffing</h3>
                <p className="text-sm text-red-400">Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted partner for professional staffing services for corporate 
              and private events in the DMV area since 2014.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-red-400 transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-red-400 transition-colors">Our Team</Link></li>
              <li><Link to="/references" className="text-gray-400 hover:text-red-400 transition-colors">References</Link></li>
              <li><Link to="/request-service" className="text-gray-400 hover:text-red-400 transition-colors">Request Service</Link></li>
              <li><Link to="/join-our-team" className="text-gray-400 hover:text-red-400 transition-colors">Join Our Team</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Catering Staff</li>
              <li>Specialized Bartenders</li>
              <li>TIPS 360 Certified</li>
              <li>Event Coordinators</li>
              <li>Security Personnel</li>
              <li>VIP Assistants</li>
              <li>Corporate Events</li>
              <li>Private Events</li>
              <li>Charitable Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:17039498462" className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors">
                <Phone size={16} />
                <span>(D) 703 - 949 8462</span>
              </a>
              <a href="tel:15713133345" className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors">
                <Phone size={16} />
                <span>(O) 571 - 313 3345</span>
              </a>
              <a href="mailto:booking@pstaffing.services" className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors">
                <Mail size={16} />
                <span>booking@pstaffing.services</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <address className="not-italic">
                  501 Church Street Northeast<br />
                  Vienna, Virginia 22180<br />
                  United States
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold mb-2">Service Areas</h4>
            <p className="text-gray-400 text-sm">
              We serve the entire Washington D.C. metropolitan area
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-gray-400">
            <div>
              <h5 className="font-semibold text-white mb-1">Washington, D.C.</h5>
              <p>Capitol Hill • Georgetown • Dupont Circle • Adams Morgan • Foggy Bottom</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-1">Northern Virginia</h5>
              <p>Arlington • Alexandria • Vienna • McLean • Great Falls</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-1">Maryland</h5>
              <p>Bethesda • Potomac • Chevy Chase • Silver Spring • Rockville</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>
                © {currentYear} Professional Staffing Services. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <span>Licensed in Virginia</span>
              <span>•</span>
              <span>Insured & Bonded</span>
              <span>•</span>
              <span>Since 2014</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Professional Staffing Services - Setting new standards of excellence in event staffing services
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
