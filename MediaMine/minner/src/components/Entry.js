
import QuizCard from "./QuizCard";
import quickPicks from "../assets/short.webp";
import deepDigs from "../assets/long.webp";
import { Button } from 'semantic-ui-react'
import Link from '@mui/material/Link'

export const Entry=()=>{
    const beginshortQuiz = (e) => {
        window.location.href="http://localhost:3000/music/shortquiz"
    }

    const beginlongQuiz = (e) => {
      window.location.href="http://localhost:3000/music/longquiz"
  }

    return(
    <div className="quiz-entry-holder w-100">
      <div className="home container home-holder">
        <div className="row">
          <div className="col-10 ">
            <h1 className="display-4 m-0 heavy-text">{"Music"}</h1>
            <p className="m-0 font-14">{"Select quiz length and get personalized movie suggestions"}</p>
          </div>
        </div>
            
        <QuizCard
          quiz_name="Quick Picks"
          quiz_text="Short and simple quiz to get immediate suggestions"
          image={quickPicks}
          duration="5 mins"
          beginQuiz={beginshortQuiz}
          quizCategory={"Music"}
        />
      

        <QuizCard
          quiz_name="Deep Digs"
          quiz_text="In depth  questionnaire to find the absolute perfect fit just for you"
          image={deepDigs}
          duration="20 mins"
          beginQuiz={beginlongQuiz}
          quizCategory={"Music"}
        />


      </div>
    </div>
    )
}

export default Entry