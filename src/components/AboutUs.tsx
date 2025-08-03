import { Award, Heart, Users } from 'lucide-react'
import CeoImage from '../../public/images/CEO.jpg'
import Imagen1 from '../../public/images/imagen1.jpg'

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Excellence in Every <span className="text-red-600">Detail</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2014, Professional Staffing is the trusted partner for premier event staffing in the DMV area.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission: Your Event's Success
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Professional Staffing, our mission is to elevate your event from memorable to truly unforgettable. We are dedicated to providing highly trained, professional, and personable staff who seamlessly integrate into your team and execute your vision with precision and grace. Your success is our highest priority.
              </p>
              <p>
                We specialize in creating customized staffing solutions that perfectly match the unique needs of your event, whether it's an intimate gathering or a large-scale production. Our commitment to continuous training and the highest industry standards ensures that every member of our team is equipped to deliver exceptional service.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src={Imagen1} alt="Our Team at a high-profile event" className="rounded-lg shadow-lg"/>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center mb-4">
                <Award className="h-12 w-12 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Professionalism</h4>
              <p className="text-gray-600">We uphold the highest standards of conduct, presentation, and service in every interaction.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center mb-4">
                <Heart className="h-12 w-12 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Passion for Service</h4>
              <p className="text-gray-600">We are genuinely dedicated to the success of our clients' events and the satisfaction of their guests.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center mb-4">
                <Users className="h-12 w-12 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Teamwork</h4>
              <p className="text-gray-600">We work collaboratively with clients and each other to ensure a smooth and successful event.</p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
                <img src={CeoImage} alt="Maichol Pazsoldan, Founder & CEO" className="rounded-2xl w-full h-full object-cover"/>
            </div>
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Our Founder</h3>
                <p className="text-red-600 font-semibold mb-4">Maichol Pazsoldan, Founder & CEO</p>
                <p className="text-gray-700 leading-relaxed">
                Maichol Pazsoldan is the founder and CEO of Professional Staffing, and a leader with a clear vision for excellence in catering and event service. His strategic approach and commitment to the continuous training of his team has allowed him to consolidate the company as a reliable provider of professional staff in the DMV area. With certifications in TIPS 360 and Servsafe, Maichol has promoted the creation of a highly trained team committed to quality.
                </p>
            </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs