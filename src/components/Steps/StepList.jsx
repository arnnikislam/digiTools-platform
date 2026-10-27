import Step from "./Step";

const StepList = () => {
  const steps = [
    {
      id: 1,
      step: "01",
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
      icon: "https://i.ibb.co.com/d4SS4WQm/user.png",
    },
    {
      id: 2,
      step: "02",
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
      icon: "https://i.ibb.co.com/m56WFwxZ/package.png",
    },
    {
      id: 3,
      step: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: "https://i.ibb.co.com/J6jdg2s/rocket.png",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-6 bg-[#F9FAFC] py-8">
      <h2 className="text-xl md:text-4xl font-bold mb-2">
        Get Started in 3 Steps
      </h2>
      <p className="text-[#627382] text-center">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 md:w-[80%] w-[92%] mx-auto">
        {steps.map((step) => (
          <Step key={step.id} step={step}></Step>
        ))}
      </div>
    </div>
  );
};

export default StepList;
