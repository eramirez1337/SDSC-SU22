
import ConnectApi from "../api/ConnectApi";
import LoadingGif from "../assets/pickaxe.gif";
import Logo from '../assets/image.jpg';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LoadingImage from "../assets/hammer.png";
import Reccommendation from "./mrecommendation";
import musicimage from "../assets/music.png"

//import mReccommendation from "./mReccommendation";

export const Recdislike=()=>{
    const REC_URL= "http://127.0.0.1:8000/api/post/recdislike";
    const [rec_dataState] = ConnectApi(REC_URL);
    const r = rec_dataState.data.flatMap((q) => q.name_simi);
    const rc = r.length;

    while(rc==0){
      return(
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
        <h1
          className="display-6 text-center w-100 mt-3"
          style={{ color: "var(--sea-green-crayola)" }}
        >
          Mining in Progress...
        </h1>
      </div>
      )

    }
    return(
        <React.Fragment>
            <div className="home-holder mt-2 container">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 m-0 heavy-text">Mining Complete!</h1>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <p className="m-0 font-14">
            Here are our finds from your mine. Each suggested title was
          </p>
        </div>
      </div>
        
            {rec_dataState.data.slice(-3).map(({ name_simi }, i) => (
            <div key={i}>
              <Reccommendation
                title={name_simi}
                image={musicimage}
                quizName={"MusicShortQuiz"}
              />
            </div>
            ))}
            <div>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    href="http://localhost:3000/"
                  >
                    Mine Again
                  </Button>
                </div>
                </div>
        </React.Fragment>
    )
}

export default Recdislike