import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const References = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const clients = [
    {
      category: "Fortune 500 Corporations",
      clients: [
        "Marriott International",
        "Hilton Worldwide",
        "Capital One",
        "Booz Allen Hamilton",
        "Deloitte & Touche",
        "Ernst & Young",
        "PwC (PricewaterhouseCoopers)",
        "KPMG"
      ]
    },
    {
      category: "Government Institutions",
      clients: [
        "U.S. Department of State",
        "Embassy of Spain",
        "Embassy of France",
        "World Bank",
        "International Monetary Fund",
        "Organization of American States",
        "U.S. Chamber of Commerce",
        "Smithsonian Institution"
      ]
    },
    {
      category: "Non-Profit Organizations",
      clients: [
        "American Red Cross",
        "United Way",
        "Kennedy Center Foundation",
        "Children's National Hospital",
        "American Heart Association",
        "March of Dimes",
        "Susan G. Komen Foundation",
        "Make-A-Wish Foundation"
      ]
    },
    {
      category: "VIP Private Clients",
      clients: [
        "Diplomatic families",
        "Corporate executives",
        "Entertainment personalities",
        "Political leaders",
        "Distinguished entrepreneurs",
        "International celebrities",
        "Professional athletes",
        "Public figures"
      ]
    }
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "Events Director",
      company: "Marriott International",
      text: "Professional Staffing Services has been our trusted partner for years. Their staff is exceptional and they always exceed our expectations.",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      position: "Executive Director",
      company: "Children's National Hospital",
      text: "For our annual charity galas, we completely trust PS Staffing. Their professionalism and attention to detail are unmatched.",
      rating: 5
    },
    {
      name: "Ambassador Catherine Williams",
      position: "Ambassador",
      company: "UK Embassy",
      text: "Diplomatic events require the highest level of protocol and discretion. PS Staffing always delivers impeccable results.",
      rating: 5
    },
    {
      name: "James Thompson",
      position: "Events Manager",
      company: "Capital One",
      text: "From executive conferences to corporate celebrations, PS Staffing handles every event with exceptional professionalism.",
      rating: 5
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading <span className="text-red-600">Organizations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has earned us the trust of a diverse range of prestigious clients.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.category}</h3>
              <div className="grid grid-cols-1 gap-y-3">
                {category.clients.map((client, idx) => (
                  <p key={idx} className="text-gray-600">{client}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Slideshow */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <Quote className="text-red-500 mr-4" size={32} />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-red-600 font-medium">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <ChevronLeft className="text-gray-600 group-hover:text-red-600 transition-colors" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <ChevronRight className="text-gray-600 group-hover:text-red-600 transition-colors" size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-red-600' : 'bg-gray-300 hover:bg-red-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to elevate your event?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us provide the professional touch that makes the difference. Contact us today for a personalized quote.
          </p>
          <a
            href="/request-service"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default References
