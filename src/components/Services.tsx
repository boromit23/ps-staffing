import { 
  Utensils, 
  Wine, 
  Users, 
  Shield, 
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: Utensils,
      title: "Servers & Waitstaff",
      description: "Professional, TIPS 360 certified servers ensuring seamless and elegant service for any occasion.",
      features: ["Fine Dining Service", "Buffet Management", "Corporate Events", "Private Parties"]
    },
    {
      icon: Wine,
      title: "Bartenders & Mixologists",
      description: "Expert bartenders and mixologists to elevate your event with classic and custom cocktails.",
      features: ["TIPS 360 Certified", "Full Bar Setup", "Custom Drink Menus", "Corporate & Private Events"]
    },
    {
      icon: Users,
      title: "Event Captains & Supervisors",
      description: "Experienced captains to manage staff, coordinate with vendors, and ensure a flawless event flow.",
      features: ["On-site Management", "Staff Supervision", "Vendor Coordination", "Timeline Management"]
    },
    {
      icon: Shield,
      title: "Chefs & Kitchen Staff",
      description: "Skilled culinary professionals to assist with food preparation, plating, and kitchen management.",
      features: ["Prep Cooks", "Line Cooks", "Dishwashers", "Kitchen Stewards"]
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Staffing for Every <span className="text-red-600">Occasion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide top-tier, reliable, and professional staff for corporate and private events throughout the Washington D.C., Maryland, and Virginia (DMV) area.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex-shrink-0 mb-6">
                  <Icon className="h-12 w-12 text-red-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link to="/request-service" className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                    Request a Quote <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
