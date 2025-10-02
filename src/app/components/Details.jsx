import { FaClock, FaShieldAlt, FaTruck } from "react-icons/fa";

export default function Details() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 p-6 bg-gray-50 rounded-xl shadow-md">
      {/* Card 1 */}
      <div className="flex-1 flex flex-col items-center text-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
        <FaClock className="text-blue-900 w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold text-blue-900">Reliable and On Time</h3>
        <p className="text-gray-700 mt-2">
          Count on us to be there when you need us most.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex-1 flex flex-col items-center text-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
        <FaShieldAlt className="text-blue-900 w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold text-blue-900">Licensed, Bonded, Insured</h3>
        <p className="text-gray-700 mt-2">
          Professional service with full protection and peace of mind.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex-1 flex flex-col items-center text-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
        <FaTruck className="text-blue-900 w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold text-blue-900">We Travel to You</h3>
        <p className="text-gray-700 mt-2">
          Convenient mobile service at your home, office, or meeting place.
        </p>
      </div>
    </div>
  );
}