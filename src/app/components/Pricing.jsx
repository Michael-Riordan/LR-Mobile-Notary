export default function PricingSection() {
  const pricing = [
    {
      title: "General Notary",
      price: "$10",
      description: "Per notarized signature (AZ state max). Travel fee added based on distance/time.",
    },
    {
      title: "Loan Signing",
      price: "$100–$200",
      description: "Package-based pricing for refi, purchase, HELOC, reverse, seller/buyer.",
    },
    {
      title: "Mobile Travel",
      price: "From $25",
      description: "Calculated by mileage, time of day, rush/after-hours, and wait time if any.",
    },
  ];

  return (
    <section className="mt-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Simple Pricing</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Transparent pricing for all of our services. Final quote provided before travel.
        </p>
        <div className="w-24 h-1 bg-blue-900 mx-auto mt-4 rounded"></div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricing.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-100 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-4">{item.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mb-4">{item.price}</p>
            <p className="text-gray-700 text-sm md:text-base">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="mt-8 text-gray-600 text-sm md:text-base text-center">
        Government ID required. We are not attorneys and do not provide legal advice.
      </p>
    </section>
  );
}