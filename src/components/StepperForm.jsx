import { useState } from 'react';

const StepperForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });
  const [error, setError] = useState('');

  const formStepsData = [
    {
      label: "What is your name?",
      placeholder: "Enter your name",
      type: "text",
      key: "name"
    },
    {
      label: "What is your email?",
      placeholder: "Enter your email",
      type: "email",
      key: "email"
    },
    {
      label: "What is your reason for contact?",
      placeholder: "Enter your contact reason",
      type: "text",
      key: "contact"
    }
  ];

  const handleNextStep = (e) => {
    e.preventDefault();
    const currentKey = formStepsData[step].key;

    if (!formData[currentKey]) {
      setError("Please fill this field to continue.");
      return;
    }

    setError('');
    setStep(step + 1);
  };

  const handleInfoChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the formData to a backend here.
    // For this example, we'll just show a success message.
    setError('Form submitted successfully!');
    // Optional: reset the form after submission
    // setStep(0);
    // setFormData({ name: '', email: '', contact: '' });
  };

  const highlightStep = "w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 bg-green-500 text-white font-semibold transition-colors duration-300";
  const unHighlightStep = "w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 font-semibold transition-colors duration-300";
  const lineHighlight = "flex-1 h-1 bg-green-500 mx-2 transition-colors duration-300";
  const lineUnHighlight = "flex-1 h-1 bg-gray-300 mx-2 transition-colors duration-300";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans antialiased">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-500 ease-in-out">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Multi-Step Contact Form</h1>

        {/* Stepper progress bar */}
        <div className="flex items-center justify-between mb-8">
          {formStepsData.map((_, index) => (
            <>
              <div key={index} className={step >= index ? highlightStep : unHighlightStep}>
                {index + 1}
              </div>
              {index < formStepsData.length && (
                <div className={step > index ? lineHighlight : lineUnHighlight}></div>
              )}
            </>
          ))}
          <div className={step === formStepsData.length ? highlightStep : unHighlightStep}>
            {formStepsData.length + 1}
          </div>
        </div>
        
        {/* Error message box */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Form content */}
        {step < formStepsData.length && (
          <form onSubmit={handleNextStep} className="mt-8 transition-opacity duration-300 ease-in-out">
            <div className="mb-6">
              <label htmlFor={formStepsData[step].key} className="block text-gray-700 text-lg font-medium mb-2">
                {formStepsData[step].label}
              </label>
              <input
                type={formStepsData[step].type}
                id={formStepsData[step].key}
                name={formStepsData[step].key}
                value={formData[formStepsData[step].key]}
                onChange={handleInfoChange}
                placeholder={formStepsData[step].placeholder}
                className="w-full px-4 py-3 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow duration-200"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {/* Review step */}
        {step === formStepsData.length && (
          <div className="mt-8 transition-opacity duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Review Your Information</h2>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600 font-semibold">Your Name:</p>
                <p className="text-gray-800">{formData.name || 'Not provided'}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600 font-semibold">Your Email:</p>
                <p className="text-gray-800">{formData.email || 'Not provided'}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600 font-semibold">Reason for Contact:</p>
                <p className="text-gray-800">{formData.contact || 'Not provided'}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="bg-gray-400 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperForm;
