import { FaCheck } from "react-icons/fa";

export default function ServicesSection() {
  const services = {
    "General Notary": [
      "Acknowledgments & Jurats",
      "Wills & Trusts",
      "Affidavits & Oaths",
      "Title & DMV forms",
    ],
    "Loan Signings": [
      "Refinance & Purchase",
      "HELOC & Reverse",
      "Deed of Trust / Mortgage",
      "Seller / Buyer packages",
    ],
    "Business & Personal": [
      "Power of Attorney",
      "I‑9 Employment Verification",
      "School & Travel forms",
      "Healthcare directives",
    ],
  };

  return (
    <section className="mt-16 self-center">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Our Services</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Comprehensive notary and document signing services we provide
        </p>
        <div className="w-24 h-1 bg-blue-900 mx-auto mt-4 rounded"></div>
      </div>

      {/* Services Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(services).map(([category, items], index) => (
          <div key={index} className="bg-white border border-blue-100 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <FaCheck className="text-blue-900 w-4 h-4 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}