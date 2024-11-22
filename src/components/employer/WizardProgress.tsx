interface Step {
  number: number;
  title: string;
}

interface WizardProgressProps {
  currentStep: number;
  steps: Step[];
}

const WizardProgress = ({ currentStep, steps }: WizardProgressProps) => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
      <div className="relative flex justify-between">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 ${
                step.number <= currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step.number}
            </div>
            <span
              className={`mt-2 text-sm font-medium ${
                step.number <= currentStep ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WizardProgress;