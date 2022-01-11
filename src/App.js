import React, { useState } from 'react';
import './style.css';
export default function App() {
  const questions = [
    {
      questionText: 'what is the capital of Senegal',
      answerOptions: [
        { answerText: 'Buenos Aires ', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Dakar', isCorrect: true },
        { answerText: 'Cancún', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Meta ?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Mark Zuckerberg', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: false },
      ],
    },

    {
      questionText: 'how many countries in the world ?',
      answerOptions: [
        { answerText: '122', isCorrect: false },
        { answerText: '214', isCorrect: false },
        { answerText: '98', isCorrect: false },
        { answerText: '195', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="app__title">
              <h1>Simple Quiz Applicatin</h1>
            </div>
            <div className="question-section">
              <div className="question-count">
                <h4>
                  Question {currentQuestion + 1}/{questions.length}
                </h4>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
