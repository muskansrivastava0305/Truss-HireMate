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
  }
  const countryCodes = [
    { code: "+1", flag: ":us:", country: "US" },
    { code: "+44", flag: ":gb:", country: "UK" },
    { code: "+91", flag: ":flag-in:", country: "IN" },
    { code: "+86", flag: ":cn:", country: "CN" },
    { code: "+49", flag: ":de:", country: "DE" },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#027864] via-teal-500 to-[#027864] px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-gray-100 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book your free
            <br />
            demo!
          </h1>
          <p className="text-lg md:text-xl text-teal-100 mb-8">
            See how ThreelineNote can transform your hiring process.
          </p>
        </div>
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-transparent backdrop-blur-sm border border-white rounded-2xl p-6 md:p-8 space-y-4 shadow-lg"
          >
            {/* Full Name */}
            <div>
              <label className="block text-gray-100 text-sm font-medium mb-2">Full name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your full name"
              />
            </div>
            {/* Business Email */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Business email address</label>
              <input
                type="email"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your business email"
              />
            </div>
            {/* Company Name */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Company name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your company name"
              />
            </div>
            {/* Contact Number with Country Code */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Contact number</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="px-3 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
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
                  className="flex-1 px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>
            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Preferred demo date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Preferred demo time</label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-teal-300/30 border border-teal-300/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 [color-scheme:dark]"
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg hover:bg-teal-50 transition-colors duration-200 mt-6"
            >
              Book Demo →
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}






