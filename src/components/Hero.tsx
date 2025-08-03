import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Calendar } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
    '/images/slide5.jpg',
    '/images/slide6.jpg',
    '/images/slide7.jpg'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="home" className="relative bg-gradient-to-br from-red-600 via-red-700 to-black min-h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                ✨ Serving the DMV Area Since 2014
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elite Staffing for 
              <span className="block text-red-300">Unforgettable Events</span>
            </h1>
            
            <p className="text-xl mb-4 text-red-100 font-medium">
              Serving Washington D.C., Maryland, and Virginia
            </p>
            
            <p className="text-lg mb-8 text-white leading-relaxed max-w-xl">
              From corporate functions to private celebrations, our professional servers, bartenders, and event staff are trained to deliver excellence and elegance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="text-red-300" size={24} />
                </div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-red-200">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-red-300" size={24} />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-red-200">Successful Events</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="text-red-300" size={24} />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-red-200">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/request-service"
                className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Request Service
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <a
                href="https://wa.me/15713133345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white border-opacity-20">
              {/* Slideshow Container */}
              <div className="relative h-96 w-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide}
                      alt={`Professional Staffing Service ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                    {/* Overlay para mejor legibilidad */}
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  </div>
                ))}
                
                {/* Indicadores de slide */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-red-400 scale-110' 
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Texto superpuesto */}
                <div className="absolute bottom-8 left-6 right-6 text-white">
                  <p className="text-lg font-bold text-shadow-lg">
                    Professional Events • Premium Service
                  </p>
                  <p className="text-sm text-red-200 font-medium">
                    "Excellence in every detail, professionalism in every service"
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-400 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-20 blur-lg"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
