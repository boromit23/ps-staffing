import { MapPin, Star, Building, Crown, Users, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const Venues = () => {
  const venueCategories = [
    
  ]

  const serviceAreas = [
    {
      area: "Washington, D.C.",
      highlights: ["Capitol Hill", "Georgetown", "Dupont Circle", "Adams Morgan", "Foggy Bottom"]
    },
    {
      area: "Northern Virginia",
      highlights: ["Arlington", "Alexandria", "Vienna", "McLean", "Great Falls"]
    },
    {
      area: "Maryland",
      highlights: ["Bethesda", "Potomac", "Chevy Chase", "Silver Spring", "Rockville"]
    }
  ]

  return (
    <section id="venues" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Where We <span className="text-red-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have the experience and credentials to provide services at the most prestigious 
            and exclusive venues in the Washington D.C. metropolitan area.
          </p>
        </div>

        {/* Service Areas Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{area.area}</h3>
              <div className="space-y-2">
                {area.highlights.map((highlight, idx) => (
                  <div key={idx} className="text-gray-600 text-sm">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Venue Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {venueCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="text-red-600" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {category.venues.map((venue, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{venue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Special Requirements */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Special Credentials
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <Star className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Security Clearance</h4>
                    <p className="text-gray-600">Staff with clearance for government and diplomatic events</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <Crown className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">VIP Protocol</h4>
                    <p className="text-gray-600">Specialized training in diplomatic protocol and etiquette</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <Building className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Exclusive Venues</h4>
                    <p className="text-gray-600">Authorized access to DC's most prestigious spaces</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-black rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Event Types</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div>• Charity galas</div>
                  <div>• Executive conferences</div>
                  <div>• Product launches</div>
                  <div>• Diplomatic receptions</div>
                  <div>• Luxury weddings</div>
                </div>
                <div className="space-y-2">
                  <div>• Corporate events</div>
                  <div>• Private celebrations</div>
                  <div>• Shareholder meetings</div>
                  <div>• Official functions</div>
                  <div>• State dinners</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                <p className="text-red-200 font-medium text-center">
                  "Proven experience at the most exclusive venues"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Coverage */}
        <div className="mt-16 bg-gradient-to-r from-gray-100 to-red-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Geographic Coverage
            </h3>
            <p className="text-lg text-gray-600">
              We serve the entire Washington D.C. metropolitan area with the same excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow">
              <div className="text-2xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Mile Radius</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow">
              <div className="text-2xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600">Authorized Venues</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow">
              <div className="text-2xl font-bold text-red-600 mb-2">3</div>
              <div className="text-gray-600">States Covered</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your venue not on the list?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We work at any location in the DMV area. If you have a specific venue in mind, 
            contact us to discuss the details and ensure we can provide our services there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-service"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              Inquire About Venue
            </Link>
            <a
              href="tel:17039498462"
              className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Venues