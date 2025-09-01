import React, { useState } from 'react';

const quizData = [
  {
    question: 'What is the capital of France?',
    img: 'https://images.unsplash.com/photo-1502602898986-7e3e7f4c9a63?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    options: ['London', 'Berlin', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'What is 5 + 7?',
    img: 'https://images.unsplash.com/photo-1542450373-3568c07c2447?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    options: ['10', '12', '15', '11'],
    answer: '12',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    //img: 'https://images.unsplash.com/photo-1542450373-3568c07c2447?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHaVThYnL13Xskem8Zy5sVm-EEOY_knDRdLRdAaXpTg&s',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [message, setMessage] = useState('');

  const handleNext = () => {
    if (selectedOption === null) {
      setMessage('Please select an option before proceeding.');
      return;
    }
    
    // Save the user's answer
    const newAnswers = [...userAnswers, selectedOption];
    setUserAnswers(newAnswers);

    // Check if the answer is correct
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    // Move to the next question or show results
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selection for the next question
      setMessage('');
    } else {
      setShowResults(true);
      setMessage('Quiz finished!');
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setMessage('');
  };

  const getOptionClass = (option, questionIndex) => {
    if (!showResults) return 'p-3 rounded-lg border border-gray-300 text-left w-full transition-colors duration-200';

    const userAnswer = userAnswers[questionIndex];
    const correctAnswer = quizData[questionIndex].answer;

    if (option === correctAnswer) {
      return 'p-3 rounded-lg border bg-green-200 border-green-500 text-green-700 font-semibold w-full';
    } else if (option === userAnswer) {
      return 'p-3 rounded-lg border bg-red-200 border-red-500 text-red-700 font-semibold w-full';
    } else {
      return 'p-3 rounded-lg border border-gray-300 w-full';
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResults(false);
    setScore(0);
    setUserAnswers([]);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 md:p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          <span className="text-blue-600">Trivia</span> Quiz
        </h1>
        
        {message && (
          <div className="bg-blue-100 text-blue-600 p-3 rounded-lg text-center font-medium transition-all duration-300">
            {message}
          </div>
        )}
        
        {!showResults ? (
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src={quizData[currentQuestionIndex].img} 
                alt="Quiz related" 
                className="w-full h-48 object-cover" 
              />
            </div>
            
            <p className="text-xl font-semibold text-gray-700 text-center">
              Question {currentQuestionIndex + 1} of {quizData.length}:
            </p>
            <p className="text-2xl font-bold text-gray-900 text-center">
              {quizData[currentQuestionIndex].question}
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-4">
              {quizData[currentQuestionIndex].options.map((option, i) => (
                <label 
                  key={i} 
                  className="flex items-center space-x-3 cursor-pointer p-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  <input
                    type="radio"
                    name="quiz-option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500 transition-colors"
                  />
                  <span className="text-lg font-medium text-gray-800">{option}</span>
                </label>
              ))}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full p-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                >
                  {currentQuestionIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Quiz Complete!</h2>
            <p className="text-xl text-gray-700 font-semibold">
              Your Score: <span className="text-blue-600">{score}</span> out of <span className="text-blue-600">{quizData.length}</span>
            </p>
            <div className="space-y-8">
              {quizData.map((q, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
                  <p className="text-lg font-bold text-gray-800">
                    Q{index + 1}: {q.question}
                  </p>
                  <p className="text-md text-gray-600">
                    Your Answer: <span className={userAnswers[index] === q.answer ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                      {userAnswers[index]}
                    </span>
                  </p>
                  {userAnswers[index] !== q.answer && (
                    <p className="text-md text-gray-600">
                      Correct Answer: <span className="text-green-600 font-semibold">{q.answer}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4">
              <button
                onClick={resetQuiz}
                className="w-full p-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
