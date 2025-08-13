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
import { Link } from 'react-router-dom'

const TeamContent = () => {
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
        "TIPS 360 Certified",
        "Minimum 3 years experience",
        "Knowledge of premium liquors",
        "Professional appearance"
      ],
      specialties: ["Classic cocktails", "Flair bartending", "Wine service", "Craft mixology"]
    },
    {
      icon: GraduationCap,
      title: "Kitchen Staff",
      description: "Experienced culinary professionals specialized in event production and high-volume service.",
      requirements: [
        "Food safety certification",
        "Experience in events",
        "Knowledge of various cuisines",
        "Teamwork skills"
      ],
      specialties: ["Event catering", "Banquet service", "International cuisine", "Dietary restrictions"]
    },
    {
      icon: UserCheck,
      title: "Event Supervisors",
      description: "Experienced team leaders who coordinate operations and ensure everything runs perfectly.",
      requirements: [
        "Minimum 5 years leadership",
        "Event management experience",
        "Problem-solving skills",
        "Bilingual preferred"
      ],
      specialties: ["Team coordination", "Quality control", "Client relations", "Crisis management"]
    },
    {
      icon: Shield,
      title: "Captains",
      description: "Service leaders who manage front-of-house operations and maintain service excellence standards.",
      requirements: [
        "Management experience",
        "Service protocol knowledge",
        "Leadership skills",
        "Attention to detail"
      ],
      specialties: ["Service coordination", "Staff training", "Quality assurance", "Guest relations"]
    },
    {
      icon: CheckCircle,
      title: "Support Staff",
      description: "Reliable team members who handle setup, cleaning, and logistical support during events.",
      requirements: [
        "Previous event experience",
        "Physical stamina",
        "Reliability",
        "Team spirit"
      ],
      specialties: ["Event setup", "Cleaning services", "Equipment handling", "Logistics support"]
    }
  ]

  const qualityStandards = [
    {
      icon: Target,
      title: "Rigorous Selection",
      description: "Detailed interview process and reference verification for every team member."
    },
    {
      icon: GraduationCap,
      title: "Continuous Training",
      description: "Regular training programs to maintain the highest service standards."
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Ongoing evaluation and feedback to ensure consistent excellence."
    },
    {
      icon: Clock,
      title: "Punctuality",
      description: "Commitment to punctuality and reliability in all our services."
    }
  ]

  return (
    <div className="p-8">
      {/* Team Roles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {teamRoles.map((role, index) => {
          const IconComponent = role.icon
          return (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
      <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
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
              href="https://boromit23.github.io/ps-staffing/join-our-team"
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
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
          <div className="text-gray-600 font-medium">Successful Events</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
          <div className="text-gray-600 font-medium">Professional Staff</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
          <div className="text-gray-600 font-medium">Years Experience</div>
        </div>
      </div>
    </div>
  )
}

export default TeamContent