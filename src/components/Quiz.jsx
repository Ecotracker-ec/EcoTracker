import React, { useState } from 'react';
import { Contact, Hero, Navbar, StarsCanvas } from '.';
import { quiz } from './questions';
import './style/indexquiz.css';

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer, explanation } = questions[activeQuestion];

  const onClickNext = () => {
    if (selectedAnswer !== null) {
      setAnswers((prev) => [
        ...prev,
        {
          question,
          choices,
          correctAnswer,
          userAnswer: selectedAnswer,
          explanation,
        },
      ]);

      setResult((prev) =>
        selectedAnswer === correctAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      );

      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
      } else {
        setShowResult(true);
      }

      setSelectedAnswer(null); // Reset selected answer for the next question
    }
  };

  const onAnswerSelected = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className='m'>
      <Navbar />
      <div className="quiz-container">
        {!showResult ? (
          <div className='cont'>
            <div>
              <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
              <span className="total-question">/{addLeadingZero(questions.length)}</span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer)}
                  key={answer}
                  className={selectedAnswer === answer ? 'selected-answer' : null}
                  style={{ pointerEvents: selectedAnswer !== null ? 'none' : 'auto' }}>
                  {answer}
                </li>
              ))}
            </ul>
            {selectedAnswer !== null && (
              <div className="explanation">
                <p>{selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect.'}</p>
                <p>{explanation}</p>
              </div>
            )}
            <div className="flex-right">
              <button onClick={onClickNext} disabled={selectedAnswer === null}>
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <h3>Review Answers</h3>
            <ul>
              {answers.map((answer, index) => (
                <li key={index}>
                  <h4>Question {index + 1}: {answer.question}</h4>
                  <p>Correct Answer: {answer.correctAnswer}</p>
                  <p>Your Answer: {answer.userAnswer}</p>
                  <p>Explanation: {answer.explanation}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
