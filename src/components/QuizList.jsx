import React, { useState } from 'react';
import QuizQuestions from './QuizQuestions';
import { quizzes } from './quizData'; // Import local quiz data
import './style/QuizList.css';

const QuizList = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizClick = (quizId) => {
    setSelectedQuiz(quizId);
  };

  return (
    <div className="quiz-list">
      <h1>Select a Quiz</h1>
      <div className="quiz-bars">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="quiz-bar"
            onClick={() => handleQuizClick(quiz.id)}
          >
            {quiz.title}
          </div>
        ))}
      </div>
      {selectedQuiz && <QuizQuestions quizId={selectedQuiz} />}
    </div>
  );
};

export default QuizList;
