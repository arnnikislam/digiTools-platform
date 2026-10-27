import PricingCard from "./PricingCard";

const PricingList = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      tagline: "Perfect for getting started",
      price: 0,
      period: "Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      popular: false,
    },
    {
      id: 2,
      name: "Pro",
      tagline: "Best for professionals",
      price: 29,
      period: "Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      tagline: "For teams and businesses",
      price: 99,
      period: "Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="py-8" container mx-auto>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-[92%] md:[80%] mx-auto">
        {plans.map((plan) => (
          <PricingCard plan={plan} key={plan.id}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
