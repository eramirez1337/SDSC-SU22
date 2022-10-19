import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import QuizEntry from './components/QuizEntery';
import Quiz from './components/Quiz';
import questions from './components/quizQuestions';
import Loading from './components/Loading';
import MusicShortQuiz from './components/MusicShortQuiz';
import MusicLongQuiz from './components/MusicLongQuiz';
import {Recdislike} from './components/Recdislike';
import {Reclike} from './components/Reclike';

import Musicrec, { MusicRec } from './components/MusicRec';
import Entry from "./components/Entry"

function App() {
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [quiz, setQuiz] = useState("");
  const [quizType, setQuizType] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState({})
  const [questionAnswers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setShowingResults] = useState(false);
  const [apiReccommendations, setApiReccommendations] = useState([]);



  const beginQuiz = (quizName, type) => {

    if (quizName !== quiz) {
      setShowingResults(false)
    }

    setAnswers([]);

    setActiveQuiz(true);

    setQuiz(quizName);

    setQuizType(type);

    setQuestionNumber(0);

    // setting the questions to be shown to user
    const questions_to_show = questions[quizName.toLowerCase()][type.replace(/\s/g, '').toLowerCase()];

    setTotalQuestions(questions_to_show.length)
    setQuizQuestions(questions_to_show)


  }

  const nextQuestion = (answer) => {
    let current_answers = questionAnswers;

    current_answers.splice(questionNumber, 1, answer);

    setAnswers(current_answers);

    setQuestionNumber(questionNumber + 1);
  }

  const prevQuestion = () => {
    setQuestionNumber(questionNumber - 1);
  }

  const goSpecificQuestion = (number) => {
    setQuestionNumber(number);
  }

  const getRecomendations = async (keysSorted) => {

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_API_URL}/api/get-reccommendations/${quiz.toLowerCase()}/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",

          },
          body: JSON.stringify({
            genres: keysSorted.slice(0, 3)
          }),
        }
      );
      let data = await response.json();
      console.log(data)
      setApiReccommendations(data.results)
      setLoading(false)

    } catch (e) {
      return {
        status: 400,
        error: "There was an error processing your request please try again",
      };
    }

  };


  const submitQuiz = () => {
    setLoading(true);
    let totalWeights = []
    // combine answers arrays
    for (const answer of questionAnswers) {
      totalWeights = [...totalWeights, ...answer.weight]
    }

    const weights = {};

    for (const item of totalWeights) {
      weights[item] = weights[item] ? weights[item] + 1 : 1;
    }


    const keysSorted = Object.keys(weights).sort(function (a, b) { return weights[b] - weights[a] })
    getRecomendations(keysSorted)
    setShowingResults(true)


  }

  const reCalculate = () => {
    submitQuiz()
    window.scrollTo(0, 0);

  }
  return (
    <React.Fragment>
      {loading ? <Loading /> :
        <div className="main-app d-flex">
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={activeQuiz && quiz === "Movies" ? <Quiz apiReccommendations={apiReccommendations} reCalculate={reCalculate} results={results} submitQuiz={submitQuiz} quizType={quizType} quizName={quiz} questionNumber={questionNumber} totalQuestions={totalQuestions} quizQuestions={quizQuestions} nextQuestion={nextQuestion} questionAnswers={questionAnswers} prevQuestion={prevQuestion} goSpecificQuestion={goSpecificQuestion} /> : <QuizEntry heading={"Movies"} lead_text={"Select quiz length and get personalized movie suggestions"} beginQuiz={beginQuiz} />} />
            <Route path="/music" element={ <Entry/>} />
            <Route path="/music/shortquiz" element={ <MusicShortQuiz/>} />
            <Route path="/music/longquiz" element={ <MusicLongQuiz/>} />
            
            <Route path="/rec" element={<MusicRec />}  />
            <Route path="/reclike" element={<Reclike />}  />
            <Route path="/recdislike" element={<Recdislike />} />
            <Route path="/book" element={activeQuiz && quiz === "Books" ? <Quiz apiReccommendations={apiReccommendations} reCalculate={reCalculate} results={results} submitQuiz={submitQuiz} quizType={quizType} quizName={quiz} questionNumber={questionNumber} totalQuestions={totalQuestions} quizQuestions={quizQuestions} nextQuestion={nextQuestion} questionAnswers={questionAnswers} prevQuestion={prevQuestion} goSpecificQuestion={goSpecificQuestion} /> : <QuizEntry heading={"Books"} lead_text={"Select quiz length and get personalized movie suggestions"} beginQuiz={beginQuiz} />} />
          </Routes>
        </div>
      }
    </React.Fragment>
  );
}

export default App;
