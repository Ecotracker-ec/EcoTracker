import React from 'react';
import { quizzes } from './quizData'; // Import local quiz data
import './style/QuizQuestions.css';

const QuizQuestions = ({ quizId }) => {
  // Find the selected quiz
  const quiz = quizzes.find(q => q.id === quizId);

  if (!quiz) {
    return <div>Quiz not found!</div>;
  }

  return (
    <div className="quiz-questions">
      <h2>{quiz.title}</h2>
      <ul>
        {quiz.questions.map((question, index) => (
          <li key={index}>
            <h3>{question.question}</h3>
            <ul>
              {question.choices.map((choice, i) => (
                <li key={i}>{choice}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestions;
