import { Link } from 'react-router-dom'
import { ArrowLeft, Users } from 'lucide-react'
import TeamContent from './TeamContent'

const TeamPage = () => {
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
            <Users className="text-red-600 mr-3" size={32} />
            <h1 className="text-4xl font-bold text-gray-900">
              Our <span className="text-red-600">Team</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Meet our dedicated professionals who make every event exceptional. 
            Our experienced team members are committed to delivering the highest 
            level of service for your special occasions.
          </p>
        </div>

        {/* Team Content */}
        <div className="bg-white rounded-2xl shadow-lg">
          <TeamContent />
        </div>
      </div>
    </div>
  )
}

export default TeamPage
