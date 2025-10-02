import { FaClock, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";

export default function ServiceInfo() {
  return (
    <section className="mt-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Our Service Info</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Everything you need to know about our hours, coverage, and payment options
        </p>
        <div className="w-24 h-1 bg-blue-900 mx-auto mt-4 rounded"></div>
      </div>

      {/* Service Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-blue-50 rounded-2xl">
        {/* Hours */}
        <div className="flex flex-col items-center text-center border border-blue-100 rounded-xl p-6 hover:bg-blue-100 transition">
          <div className="bg-blue-200 rounded-full p-4 mb-4">
            <FaClock className="text-blue-900 w-8 h-8" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-900">Hours</h3>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            Monday - Friday: 8AM - 8PM <br />
            Saturday/Sunday: 9AM - 6PM
          </p>
        </div>

        {/* Coverage */}
        <div className="flex flex-col items-center text-center border border-blue-100 rounded-xl p-6 hover:bg-blue-100 transition">
          <div className="bg-blue-200 rounded-full p-4 mb-4">
            <FaMapMarkerAlt className="text-blue-900 w-8 h-8" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-900">Coverage</h3>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            We travel throughout Phoenix and surrounding areas to serve you wherever you are.
          </p>
        </div>

        {/* Payment Options */}
        <div className="flex flex-col items-center text-center border border-blue-100 rounded-xl p-6 hover:bg-blue-100 transition">
          <div className="bg-blue-200 rounded-full p-4 mb-4">
            <FaCreditCard className="text-blue-900 w-8 h-8" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-900">Payment Options</h3>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            We accept cash, debit cards, and major digital wallets for your convenience.
          </p>
        </div>
      </div>
    </section>
  );
}