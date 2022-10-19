import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Results from "./Results";

function Quiz({
  results,
  quizType,
  questionNumber,
  totalQuestions,
  quizQuestions,
  nextQuestion,
  questionAnswers,
  prevQuestion,
  goSpecificQuestion,
  submitQuiz,
  reCalculate,
  apiReccommendations,
  quizName,
}) {
  return (
    <React.Fragment>
      {results ? (
        <Results
          reCalculate={reCalculate}
          apiReccommendations={apiReccommendations}
          quizName={quizName}
        />
      ) : (
        <React.Fragment>
          {questionNumber < totalQuestions ? (
            <div className="quiz-holder container mt-5 home-holder">
              <div className="row">
                <div className="col-12  text-center">
                  <h1 className="display-2 bold quiz-page-heading">
                    {quizType}
                  </h1>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  key={questionNumber}
                >
                  <div className="row mt-5" key={questionNumber}>
                    <div className="col-12">
                      <span style={{ color: "var( --sea-green-crayola)" }}>
                        Question {questionNumber + 1} of {totalQuestions}
                      </span>
                      <p className="display-6 bold">
                        {quizQuestions[questionNumber]["question"]}
                      </p>

                      {questionNumber > 0 ? (
                        <span
                          className="back-arrow-holder"
                          onClick={() => prevQuestion()}
                        >
                          <FontAwesomeIcon
                            icon={faArrowLeftLong}
                            className="back-arrow"
                          />
                        </span>
                      ) : null}

                      <div className="question-solutions">
                        {quizQuestions[questionNumber]["answers"].map(
                          (answer) => (
                            <div
                              className={`question-choice ${
                                questionAnswers[questionNumber] === answer
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() => nextQuestion(answer)}
                            >
                              {answer.answer}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="submit-quiz-holder home-holder mt-5 container">
              <div className="row">
                <div className="col-12">
                  <h1 className="bold display-4">Ready to submit?</h1>
                  <p className="m-0 font-14">
                    Look over your responses. Feel free to change and edit
                    before
                  </p>
                  <p className="font-14">
                    submitting for we begin the mining process!
                  </p>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    {quizQuestions.map((question, counter) => (
                      <div
                        className="submit-row d-flex w-100"
                        key={counter}
                        onClick={() => goSpecificQuestion(counter)}
                      >
                        <div className="submit-question">
                          <span>{counter + 1}</span>
                          {question.question}
                        </div>
                        <div className="submit-answer">
                          {questionAnswers[counter]["answer"]}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row mt-5">
                    <div className="col-12">
                      <div className="submit-quiz-btn-holder justify-content-end d-flex">
                        <button
                          className="submit-quiz-btn btn"
                          onClick={() => submitQuiz()}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Quiz;
