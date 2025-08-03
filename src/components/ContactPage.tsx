import { Link } from 'react-router-dom'
import { ArrowLeft, Phone } from 'lucide-react'
import ContactContent from './ContactContent'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <Phone className="text-red-600 mr-3" size={32} />
            <h1 className="text-4xl font-bold text-gray-900">
              Contact <span className="text-red-600">Us</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Ready to make your event exceptional? Get in touch with our professional 
            team today. We're here to help you plan and execute the perfect event 
            with our experienced staff.
          </p>
        </div>

        {/* Contact Content */}
        <div className="bg-white rounded-2xl shadow-lg">
          <ContactContent />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
