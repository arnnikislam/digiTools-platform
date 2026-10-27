const Step = ({ step }) => {
  return (
    <div className="relative rounded-xl border border-[#F1F1F1] shadow-sm p-8 text-center">
      <span className="absolute top-4 right-4 rounded-full bg-purple-600 text-white text-xs w-6 h-6 flex items-center justify-center">
        {step.step}
      </span>
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
        <img src={step.icon} alt={step.title} className="h-8 w-8 object-contain" />
      </div>
      <h3 className="font-semibold text-lg">{step.title}</h3>
      <p className="text-sm text-gray-500 mt-2">{step.description}</p>
    </div>
  );
};

export default Step;
