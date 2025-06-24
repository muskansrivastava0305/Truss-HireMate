"use client"

import { useState } from "react"

export default function DemoBookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    companyName: "",
    contactNumber: "",
    countryCode: "+91",
    preferredDate: "",
    preferredTime: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const countryCodes = [
    { code: "+1", flag: "🇺🇸", country: "US" },
    { code: "+44", flag: "🇬🇧", country: "UK" },
    { code: "+91", flag: "🇮🇳", country: "IN" },
    { code: "+86", flag: "🇨🇳", country: "CN" },
    { code: "+49", flag: "🇩🇪", country: "DE" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#027864] via-teal-300 to-[#027864] p-4 flex items-center justify-center">\
      <div className="w-full max-w-6xl flex items-center justify-between">
        {/* Left side content */}
        <div className="flex-1 text-white pr-8 w-full">
          <h1 className="text-5xl font-bold mb-4">
            Book your free
            <br />
            demo!
          </h1>
          <p className="text-xl text-teal-100 mb-8">See how ThreelineNote can transform your hiring process.</p>
        </div>

        {/* Right side form */}
        <div className="w-1/2">
          <form
            onSubmit={handleSubmit}
            className=" bg-transparent backdrop-blur-sm border border-white rounded-2xl p-6 space-y-4 shadow-lg"
          >
            {/* Full name */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Full name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Business email */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Business email address</label>
              <input
                type="email"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="Enter your business email"
              />
            </div>

            {/* Company name */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Company name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>

            {/* Contact number */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Contact number</label>
              <div className="flex space-x-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="px-3 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code} className="bg-teal-600 text-white">
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>

            {/* Date and time row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Preferred demo date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Preferred demo time</label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg hover:bg-teal-50 transition-colors duration-200 flex items-center justify-center space-x-2 mt-6"
            >
              <span>Book Demo</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom right dimension indicator */}
      <div className="absolute bottom-4 right-4 text-white/60 text-sm font-mono">574 × 624</div>
    </div>
  )
}
