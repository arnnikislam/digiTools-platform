const PricingCard = ({ plan }) => {
  const { name, tagline, price, period, features, buttonText, popular } = plan;
  return (
    <div
      className={`relative flex flex-col rounded-xl border border-[#F2F2F2] shadow-sm p-4 ${
        popular
          ? "bg-linear-to-br from-indigo-600 to-purple-600 text-white"
          : "bg-gray-50"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className={`text-sm ${popular ? "text-purple-100" : "text-gray-500"}`}>
        {tagline}
      </p>

      <p className="mt-6 text-4xl font-bold">
        ${price}
        <span
          className={`text-base font-normal ${popular ? "text-purple-100" : "text-gray-500"}`}
        >
          /{period}
        </span>
      </p>

      <ul className="mt-6 flex-1 space-y-2 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className={popular ? "text-white" : "text-green-500"}>✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full rounded-full py-3 text-sm font-semibold ${
          popular
            ? "bg-white text-purple-600"
            : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
