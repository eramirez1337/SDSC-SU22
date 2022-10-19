import React from "react";

function QuizCard({
  quiz_url,
  short_quiz_duration,
  long_quiz_duration,
  image,
  quiz_name,
  duration,
  quiz_text,
  beginQuiz,
  quizCategory,
}) {
  return (
    <div className="quiz-card mt-4">
      <img src={image} alt={quiz_name} className="quiz-card-image" />
      <div className="quiz-card-details ps-3 w-100">
        <div className="w-100 d-flex flex-column quiz-card-top">
          <span className="display-6 bold">{quiz_name}</span>
          <span>{quiz_text}</span>
        </div>
        <div className="d-flex justify-content-between w-100">
          <span className="quiz-duration">{duration}</span>
          <button
            className="btn start-quiz"
            onClick={() => beginQuiz(quizCategory, quiz_name)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
