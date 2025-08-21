import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { ArrowLeft, Send } from 'lucide-react'

const serviceRequestSchema = z.object({
  clientName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'A valid phone number is required'),
  email: z.string().email('A valid email is required'),
  eventDate: z.string().min(1, 'Event date is required'),
  guestCount: z.string().min(1, 'Number of guests is required'),
  address: z.string().min(1, 'Event address is required'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  additionalInfo: z.string().optional(),
})

type ServiceRequestFormData = z.infer<typeof serviceRequestSchema>

const ServiceRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/movlgqoa";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceRequestFormData>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      services: [],
    },
  })

  const servicesOptions = [
    "Servers & Waitstaff",
    "Bartenders & Mixologists",
    "Event Captains & Supervisors",
    "Chefs & Kitchen Staff",
    "Other (Please specify below)"
  ];

  const onSubmit = async (data: ServiceRequestFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          clientName: data.clientName,
          phone: data.phone,
          email: data.email,
          eventDate: data.eventDate,
          guestCount: data.guestCount,
          address: data.address,
          services: data.services.join(", "),
          additionalInfo: data.additionalInfo || ""
        })
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Error sending request. Please try again later.");
      }
    } catch (error) {
      alert("Error sending request. Please try again later.");
    } finally {
      setIsSubmitting(false);
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
              Request Submitted!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your request. We will contact you within the next 24 hours with a personalized quote.
            </p>
            <div className="bg-red-50 rounded-lg p-4 mb-6">
              <p className="text-red-800 font-medium">
                For urgent inquiries, call us at (703) 949-8462.
              </p>
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
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Request a <span className="text-red-600">Quote</span>
          </h1>
          <p className="text-lg text-gray-600">
            Fill out this quick form to get a personalized quote for your event.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input {...register('clientName')} placeholder="Full Name *" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <input {...register('phone')} placeholder="Phone *" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <input {...register('email')} placeholder="Email *" className="w-full px-4 py-3 border border-gray-300 rounded-lg md:col-span-2" />
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input {...register('eventDate')} type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <input {...register('guestCount')} type="number" placeholder="Number of Guests *" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <input {...register('address')} placeholder="Event Address *" className="w-full px-4 py-3 border border-gray-300 rounded-lg md:col-span-2" />
            </div>
          </div>

          {/* Services Needed */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Needed *</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {servicesOptions.map(service => (
                <label key={service} className="flex items-center space-x-3">
                  <input type="checkbox" {...register('services')} value={service} className="h-5 w-5 text-red-600" />
                  <span>{service}</span>
                </label>
              ))}
            </div>
            {errors.services && <p className="text-red-600 text-sm mt-2">{errors.services.message}</p>}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
            <textarea {...register('additionalInfo')} rows={4} placeholder="Tell us more about your event..." className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center bg-red-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-red-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Request Quote'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ServiceRequestForm
