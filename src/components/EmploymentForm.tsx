import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { ArrowLeft, Send, User, Briefcase, Clock, FileText } from 'lucide-react'

const employmentSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  address: z.string().min(10, 'Complete address required'),
  dateOfBirth: z.string().min(1, 'Date of birth required'),
  
  // Position Interest
  positionInterest: z.array(z.string()).min(1, 'Select at least one position of interest'),
  
  // Experience
  hasExperience: z.string().min(1, 'This field is required'),
  yearsExperience: z.string().optional(),
  previousExperience: z.string().optional(),
  
  // Availability
  availability: z.array(z.string()).min(1, 'Select at least one day of availability'),
  shiftPreference: z.string().min(1, 'Shift preference required'),
  
  // Skills & Certifications
  skills: z.array(z.string()).optional(),
  certifications: z.string().optional(),
  languages: z.array(z.string()).min(1, 'Select at least one language'),
  
  // Legal Requirements
  workAuthorization: z.string().min(1, 'This field is required'),
  backgroundCheck: z.string().min(1, 'This field is required'),
  
  // Additional Information
  transportation: z.string().min(1, 'This field is required'),
  references: z.string().optional(),
  additionalInfo: z.string().optional(),
})

type EmploymentFormData = z.infer<typeof employmentSchema>

const EmploymentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<EmploymentFormData>({
    resolver: zodResolver(employmentSchema)
  })

  const hasExperience = watch('hasExperience')

  const positions = [
    'Professional Server',
    'Bartender',
    'Event Coordinator',
    'Security Staff',
    'VIP Assistant',
    'Catering Staff',
    'Supervisor',
    'Cleaning Staff',
    'Mixologist',
    'Protocol Assistant'
  ]

  const skills = [
    'Customer service',
    'Teamwork',
    'Effective communication',
    'Time management',
    'Problem solving',
    'Attention to detail',
    'Flexibility',
    'Leadership',
    'Protocol and etiquette',
    'Stress management'
  ]

  const languages = [
    'Spanish',
    'English',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Other'
  ]

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  const onSubmit = async (data: EmploymentFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Employment Application Data:', data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="text-green-600" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in joining the Professional Staffing Services team. 
              We have received your application and will review it carefully. We will contact 
              you within the next 3-5 business days.
            </p>
            <div className="bg-red-50 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-red-800 mb-2">Next Steps:</h3>
              <ul className="text-red-700 text-sm text-left space-y-1">
                <li>1. Application review (3-5 days)</li>
                <li>2. Initial interview (if qualified)</li>
                <li>3. Reference verification</li>
                <li>4. Orientation and training</li>
              </ul>
            </div>
            <Link
              to="/"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Work with <span className="text-red-600">Us</span>
          </h1>
          <p className="text-lg text-gray-600">
            Join our team of professionals and be part of exceptional events in the DMV area. 
            Complete this application to begin the selection process.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <User className="text-red-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  {...register('dateOfBirth')}
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                {errors.dateOfBirth && (
                  <p className="text-red-600 text-sm mt-1">{errors.dateOfBirth.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="(703) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complete Address *
                </label>
                <textarea
                  {...register('address')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Complete address including city, state and zip code"
                />
                {errors.address && (
                  <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Position Interest */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Briefcase className="text-red-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Positions of Interest</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {positions.map((position) => (
                <label key={position} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    {...register('positionInterest')}
                    type="checkbox"
                    value={position}
                    className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                  />
                  <span className="text-gray-700">{position}</span>
                </label>
              ))}
            </div>
            {errors.positionInterest && (
              <p className="text-red-600 text-sm mt-2">{errors.positionInterest.message}</p>
            )}
          </div>

          {/* Experience */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FileText className="text-red-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have experience in event/hospitality services? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('hasExperience')}
                      type="radio"
                      value="yes"
                      className="w-5 h-5 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('hasExperience')}
                      type="radio"
                      value="no"
                      className="w-5 h-5 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
                {errors.hasExperience && (
                  <p className="text-red-600 text-sm mt-1">{errors.hasExperience.message}</p>
                )}
              </div>

              {hasExperience === 'yes' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience
                    </label>
                    <select
                      {...register('yearsExperience')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select years of experience</option>
                      <option value="menos-1">Less than 1 year</option>
                      <option value="1-2">1-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">More than 10 years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe Your Previous Experience
                    </label>
                    <textarea
                      {...register('previousExperience')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Describe your previous jobs in events, hospitality, restaurants, etc."
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Clock className="text-red-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Availability</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Available days of the week *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {days.map((day) => (
                    <label key={day} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        {...register('availability')}
                        type="checkbox"
                        value={day}
                        className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                      />
                      <span className="text-sm text-gray-700">{day}</span>
                    </label>
                  ))}
                </div>
                {errors.availability && (
                  <p className="text-red-600 text-sm mt-2">{errors.availability.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shift Preference *
                </label>
                <select
                  {...register('shiftPreference')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select your preference</option>
                  <option value="mañana">Morning Shift (6:00 AM - 2:00 PM)</option>
                  <option value="tarde">Afternoon Shift (2:00 PM - 10:00 PM)</option>
                  <option value="noche">Night Shift (6:00 PM - 2:00 AM)</option>
                  <option value="flexible">Flexible (any shift)</option>
                  <option value="fines-semana">Weekends only</option>
                </select>
                {errors.shiftPreference && (
                  <p className="text-red-600 text-sm mt-1">{errors.shiftPreference.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Languages</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Relevant Skills
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <label key={skill} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        {...register('skills')}
                        type="checkbox"
                        value={skill}
                        className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                      />
                      <span className="text-sm text-gray-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Languages you speak *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {languages.map((language) => (
                    <label key={language} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        {...register('languages')}
                        type="checkbox"
                        value={language}
                        className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                      />
                      <span className="text-sm text-gray-700">{language}</span>
                    </label>
                  ))}
                </div>
                {errors.languages && (
                  <p className="text-red-600 text-sm mt-2">{errors.languages.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Certifications (if applicable)
                </label>
                <textarea
                  {...register('certifications')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Ex: Food handling certification, first aid, bartender license, etc."
                />
              </div>
            </div>
          </div>

          {/* Legal Requirements */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Requirements</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you authorized to work in the United States? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('workAuthorization')}
                      type="radio"
                      value="yes"
                      className="w-5 h-5 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('workAuthorization')}
                      type="radio"
                      value="no"
                      className="w-5 h-5 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
                {errors.workAuthorization && (
                  <p className="text-red-600 text-sm mt-1">{errors.workAuthorization.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you agree to undergo a background check? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('backgroundCheck')}
                      type="radio"
                      value="yes"
                      className="w-5 h-5 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('backgroundCheck')}
                      type="radio"
                      value="no"
                      className="w-5 h-5 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
                {errors.backgroundCheck && (
                  <p className="text-red-600 text-sm mt-1">{errors.backgroundCheck.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have reliable transportation? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('transportation')}
                      type="radio"
                      value="yes"
                      className="w-5 h-5 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('transportation')}
                      type="radio"
                      value="no"
                      className="w-5 h-5 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
                {errors.transportation && (
                  <p className="text-red-600 text-sm mt-1">{errors.transportation.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  References (name and phone)
                </label>
                <textarea
                  {...register('references')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Provide at least 2 professional references with their names and phone numbers"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  {...register('additionalInfo')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Is there anything else you would like us to know about you?"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center bg-red-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={20} className="mr-3" />
                  Submit Application
                </>
              )}
            </button>
            <p className="text-gray-600 text-sm mt-4">
              Your application will be reviewed and we will contact you within 3-5 business days
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmploymentForm
