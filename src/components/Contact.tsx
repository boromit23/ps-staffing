import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">Contact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help make your next event exceptional. 
            Contact us for a personalized consultation and free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Phone */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">Call us directly</p>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href="tel:17039498462"
                  className="block text-lg font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  (D) 703 - 949 8462
                </a>
                <a
                  href="tel:15713133345"
                  className="block text-lg font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  (O) 571 - 313 3345
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Available Monday to Friday, 9:00 AM - 5:00 PM
              </p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Mail className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">Send us your inquiry</p>
                </div>
              </div>
              <a
                href="mailto:booking@pstaffing.services"
                className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors break-all"
              >
                booking@pstaffing.services
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Response within 24 hours
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <MessageCircle className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">Direct chat</p>
                </div>
              </div>
              <a
                href="https://wa.me/15713133345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Open WhatsApp
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Immediate response during business hours
              </p>
            </div>

            {/* Address */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">Our main office</p>
                </div>
              </div>
              <address className="text-gray-800 not-italic leading-relaxed">
                501 Church Street Northeast<br />
                Vienna, Virginia 22180<br />
                United States
              </address>
              <a
                href="https://maps.google.com/?q=501+Church+Street+Northeast,+Vienna,+Virginia+22180"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-red-600 hover:text-red-700 font-medium"
              >
                View on Google Maps →
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Clock className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">We are available</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium">Limited Weekend Support</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">Limited Weekend Support</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <span className="text-xs text-gray-500">
                    *During events, 24/7 availability
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form & Call to Actions */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to get started?</h3>
              <p className="text-lg text-red-100 mb-8">
                Take the first step towards a successful event. Choose the option that best fits your needs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <a
                  href="/request-service"
                  className="bg-white text-red-600 p-6 rounded-xl hover:bg-red-50 transition-colors group"
                >
                  <div className="flex items-center mb-3">
                    <Send className="mr-3 group-hover:translate-x-1 transition-transform" size={24} />
                    <h4 className="text-xl font-bold">Request Service</h4>
                  </div>
                  <p className="text-gray-600">
                    Complete our detailed form to receive a personalized quote
                  </p>
                </a>

                <a
                  href="/join-our-team"
                  className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 text-white p-6 rounded-xl hover:bg-opacity-20 transition-colors group"
                >
                  <div className="flex items-center mb-3">
                    <Send className="mr-3 group-hover:translate-x-1 transition-transform" size={24} />
                    <h4 className="text-xl font-bold">Join Our Team</h4>
                  </div>
                  <p className="text-red-100">
                    Join our team of professionals and be part of exceptional events
                  </p>
                </a>
              </div>

              <div className="border-t border-white border-opacity-20 pt-8">
                <h4 className="text-xl font-bold mb-4">Direct Contact</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <a
                    href="tel:17039498462"
                    className="flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 text-white py-3 px-4 rounded-lg hover:bg-opacity-20 transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    <span className="font-medium">(D) Call</span>
                  </a>
                  <a
                    href="tel:15713133345"
                    className="flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 text-white py-3 px-4 rounded-lg hover:bg-opacity-20 transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    <span className="font-medium">(O) Call</span>
                  </a>
                  
                  <a
                    href="mailto:booking@pstaffing.services"
                    className="flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 text-white py-3 px-4 rounded-lg hover:bg-opacity-20 transition-colors"
                  >
                    <Mail size={18} className="mr-2" />
                    <span className="font-medium">Email</span>
                  </a>
                  
                  <a
                    href="https://wa.me/15713133345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    <span className="font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Quick Response</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We commit to responding to all inquiries within the first 4 hours during 
                  our business hours. For urgent requests, call us directly.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Free Consultation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We offer free initial consultations to evaluate your needs and provide 
                  professional recommendations for your event.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            "Choose Professional Staffing as your new ally"
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            With over a decade of experience serving the DMV area, we're ready to make 
            your next event a memorable success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request-service"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Get Started Now
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:17039498462"
                className="inline-block border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-colors"
              >
                (D) 703 - 949 8462
              </a>
              <a
                href="tel:15713133345"
                className="inline-block border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-colors"
              >
                (O) 571 - 313 3345
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
