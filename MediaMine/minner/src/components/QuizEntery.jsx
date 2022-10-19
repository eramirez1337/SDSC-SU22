import QuizCard from "./QuizCard";
import quickPicks from "../assets/short.webp";
import deepDigs from "../assets/long.webp";

function QuizEntry({
  quiz_url,
  short_image,
  long_image,
  heading,
  lead_text,
  beginQuiz,
}) {
  return (
    <div className="quiz-entry-holder w-100">
      <div className="home container home-holder">
        <div className="row">
          <div className="col-10 ">
            <h1 className="display-4 m-0 heavy-text">{heading}</h1>
            <p className="m-0 font-14">{lead_text}</p>
          </div>
        </div>
        <QuizCard
          quiz_name="Quick Picks"
          quiz_text="Short and simple quiz to get immediate suggestions"
          image={quickPicks}
          duration="5 mins"
          beginQuiz={beginQuiz}
          quizCategory={heading}
        />
        <QuizCard
          quiz_name="Deep Digs"
          quiz_text="In depth  questionnaire to find the absolute perfect fit just for you"
          image={deepDigs}
          duration="20 mins"
          beginQuiz={beginQuiz}
          quizCategory={heading}
        />
      </div>
    </div>
  );
}

export default QuizEntry;
