import LoadingImage from "../assets/hammer.png";
import LoadingGif from "../assets/pickaxe.gif";
import ConnectApi from "../api/ConnectApi";
import Logo from '../assets/image.jpg';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from '@mui/material/Link'
import RadioGroup from "@material-ui/core/RadioGroup";

var vector=[0,0,0,0,0,0,0]
var question_countered=0
export const MusicShortQuiz=()=>{
    console.log(vector)
    const [totalQuestions]= useState(14);
    const QUIZ_URL = "http://127.0.0.1:8000/quiz/r/music_long_quiz/";
    const [quiz_dataState] = ConnectApi(QUIZ_URL);
    const [answer, setAnswer] = useState({});
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [answerCheck, setAnswerCheck] = useState();
   
    const a = quiz_dataState.data.flatMap((q) => q.answer);
    const ac = a.length;


    useEffect(() => {
      if (Object.keys(answer).length === 0) {
        setAnswer(createInitalAnswers());
      }
    }, [answer]);
    
    const createInitalAnswers = () => {
        let z = a.flatMap((obj) => obj.id);
        var object = {};
        for (var x = 0; x < ac; x++) {
          object[z[x]] = false;
        }
        return object;
      };

    const handleSelection = (e) => {
      setAnswer({ ...answer, [e.target.value]: e.target.checked });
      var x=e.target.value
      x=parseInt(x);
      if(x%4==1){
      setChecked((z) => !z)}
      else if(x%4==2){
      setChecked1((x) => !x)}
      else if(x%4==3){
      setChecked2((c) => !c)}
      else{
      setChecked3((v) => !v)}
    };

    const updateVector = (e) => {
        e.preventDefault();
        let p = Object.values(answer);
        var index=0;
        for(var i=question_countered*4;i<question_countered*4+4;i++){
          if(p[i]===true){
            index=i%4;
          }
        }
        var idx=question_countered%7
        console.log(idx)
        vector[idx]=vector[idx]+index*0.333;
        setChecked(false)
        setChecked2(false)
        setChecked3(false)
        setChecked1(false)
        
        refreshPage()
      }
      
  function refreshPage() {
    question_countered+=1;
    <MusicShortQuiz />
  }

    var postObj={
        "acousticness": vector[0]/2,
        "danceability": vector[1]/2,
        "valence" : vector[2]/2,
        "instrumentalness" : vector[3]/2,
        "energy" : vector[4]/2,
        "speechiness": vector[5]/2,
        "tempo" :vector[6]/2,
      }
    
      
/*
      const Recommend = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/create", postObj)
        console.log(postObj)
        }
*/
    if(question_countered==14){
      //const rec_URL = "http://127.0.0.1:8000/api/get";
      //const [rec_dataState] = ConnectApi(rec_URL);
      axios.post("http://127.0.0.1:8000/api/create", postObj)
      console.log(postObj)
        return (
            <React.Fragment>
              <div className="loading d-flex flex-column">
      <div className="row">
        <div className="col-12">
          <div className="d-flex w-100 justify-content-center">
            <h1 className="display-3 bold">Media Mine</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container loading-image-holder w-100 d-flex justify-content-center">
            <img
              className="loading-image"
              src={LoadingGif}
              alt="loading..."
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
                <motion.div
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  key={1}
                >
                <div className="submit-quiz-holder home-holder mt-5 container">
                <div className="row">
                <div className="col-12">
                  <p className="font-14">
                    submitting for we begin the mining process!
                  </p>
                  </div>
                </div>
                </div>
                <hammmer />
                    
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    href="http://localhost:3000/rec"
                  >
                      Get Recommendation
                    
                  </Button>
               

                    </motion.div>
                </AnimatePresence>
    </div>
                
            </React.Fragment>
        )
    }
    return(
        <React.Fragment>
     
            {quiz_dataState.data.slice(question_countered,question_countered+1).map(({ title, answer }, i) => (
                <div className="quiz-holder container mt-5 home-holder">
                <div className="row">
                  <div className="col-12  text-center">
                    <h1 className="display-2 bold quiz-page-heading">
                      MusicShortQuiz
                    </h1>
                  </div>
                </div>
                <AnimatePresence>
                <motion.div
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  key={i}
                >
                    <div className="row mt-5" key={i}>
                    <div className="col-12">
                    <span style={{ color: "var( --sea-green-crayola)" }}>
                        Question {question_countered + 1} of {totalQuestions}
                      </span>
                      <p className="display-6 bold">
                        {title}
                      </p>
                      <div className="question-solutions">
                      {answer.slice(0,1).map(({ answer_text, id },j) => (
                            <div className="question-choice">
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        value={id}
                                        color="primary"
                                        checked={checked}
                                        onChange={handleSelection}
                                        />
                                    }
                                    label={answer_text}
                                    />
                            </div>
                        ))}
                        {answer.slice(1,2).map(({ answer_text, id },j) => (
                            <div className="question-choice">
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        value={id}
                                        color="primary"
                                        checked={checked1}
                                        onChange={handleSelection}
                                        />
                                    }
                                    label={answer_text}
                                    />
                            </div>
                        ))}
                        {answer.slice(2,3).map(({ answer_text, id },j) => (
                            <div className="question-choice">
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        value={id}
                                        color="primary"
                                        checked={checked2}
                                        onChange={handleSelection}
                                        />
                                    }
                                    label={answer_text}
                                    />
                            </div>
                        ))}
                        {answer.slice(3,4).map(({ answer_text, id },j) => (
                            <div className="question-choice">
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        value={id}
                                        color="primary"
                                        checked={checked3}
                                        onChange={handleSelection}
                                        />
                                    }
                                    label={answer_text}
                                    />
                            </div>
                        ))}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={updateVector}
                            >
                            Submit Answer
                        </Button>
                      
                        
                      </div>
                    </div>
                </div>
                </motion.div>
                </AnimatePresence>
                </div>
            ))}
        </React.Fragment>
    )
}

export default MusicShortQuiz