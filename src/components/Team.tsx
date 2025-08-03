import { 
  UserCheck, 
  GraduationCap, 
  Award, 
  Shield,
  CheckCircle,
  Users,
  Target,
  Clock
} from 'lucide-react'

const Team = () => {
  const teamRoles = [
    {
      icon: Users,
      title: "Professional Servers",
      description: "Highly trained service staff in table protocol, customer service, and impeccable presentation.",
      requirements: [
        "Minimum 2 years experience",
        "Food service certification",
        "Excellent personal presentation",
        "Communication skills"
      ],
      specialties: ["French service", "American service", "Formal events", "VIP protocols"]
    },
    {
      icon: Award,
      title: "Specialized Bartenders",
      description: "Certified mixologists with extensive knowledge in classic and modern cocktails, capable of creating unique experiences.",
      requirements: [
        "Mixology certification",
        "Alcohol handling license",
        "High-level event experience",
        "Wine and spirits knowledge"
      ],
      specialties: ["Classic cocktails", "Custom cocktails", "Wine service", "Flair bartending"]
    },
    {
      icon: Target,
      title: "Event Coordinators",
      description: "Professionals with event management experience, capable of overseeing every detail and ensuring perfect execution.",
      requirements: [
        "Hospitality degree or similar",
        "5+ years experience",
        "Event management certifications",
        "Leadership skills"
      ],
      specialties: ["Logistics management", "Team coordination", "Problem solving", "Executive protocol"]
    },
    {
      icon: Shield,
      title: "Security Personnel",
      description: "Licensed agents with specialized training in event protection and high-profile situation management.",
      requirements: [
        "Valid security license",
        "Background verification",
        "First aid training",
        "VIP event experience"
      ],
      specialties: ["Discrete security", "Access control", "VIP protection", "Crowd management"]
    },
    {
      icon: GraduationCap,
      title: "Supervisors",
      description: "Team leaders with vast experience who ensure service quality and effective coordination.",
      requirements: [
        "10+ years experience",
        "Leadership certifications",
        "Proven track record",
        "Excellent references"
      ],
      specialties: ["Team management", "Quality control", "Training", "Conflict resolution"]
    },
    {
      icon: UserCheck,
      title: "VIP Assistants",
      description: "Specialized staff in exclusive attention, with training in protocol and personalized luxury service.",
      requirements: [
        "VIP service experience",
        "Protocol training",
        "Multilingual preferred",
        "Maximum discretion"
      ],
      specialties: ["VIP protocol", "Personalized attention", "Exclusive services", "Priority management"]
    }
  ]

  const qualityStandards = [
    {
      icon: CheckCircle,
      title: "Rigorous Selection",
      description: "Comprehensive interview process, reference verification, and skills assessment"
    },
    {
      icon: GraduationCap,
      title: "Continuous Training",
      description: "Regular training programs and updates on industry best practices"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Certified staff in their respective areas of specialization and required licenses"
    },
    {
      icon: Shield,
      title: "Complete Verification",
      description: "Background verification, work references, and complete legal documentation"
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have highly qualified and experienced professionals in each role, 
            carefully selected to guarantee excellence in service.
          </p>
        </div>

        {/* Team Roles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamRoles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="text-red-600" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {role.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Quality <span className="text-red-600">Standards</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every stage of the selection 
              and development process of our professional team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {qualityStandards.map((standard, index) => {
              const IconComponent = standard.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-red-600" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{standard.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{standard.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-red-600 to-black rounded-xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">Interested in Joining Our Team?</h4>
            <p className="text-red-100 mb-6">
              We are constantly seeking talented professionals who share our passion for excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join-our-team"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="mailto:booking@pstaffing.services"
                className="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
              >
                Send Resume
              </a>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-600">Active Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
            <div className="text-gray-600">Retention Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-gray-600">Complete Verification</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
