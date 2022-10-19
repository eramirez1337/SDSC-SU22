import React, { useState } from "react";
import MovieImage from "../assets/movie_sample.jpg";
import Reccommendation from "./recommendation";

function Results({ reCalculate, apiReccommendations, quizName }) {
  let title_1 = "";
  let image_1 = "";
  let year1 = "";
  let bold1 = "";

  let title_2 = "";
  let image_2 = "";
  let year2 = "";
  let bold2 = "";

  let title_3 = "";
  let image_3 = "";
  let year3 = "";
  let bold3 = "";

  let actors1 = "";
  let actors2 = "";
  let actors3 = "";

  if (quizName === "Movies" && apiReccommendations) {
    title_1 = apiReccommendations.movie1_title;
    image_1 = apiReccommendations.movie1_image;
    year1 = apiReccommendations.movie1_year;

    actors1 = `
    ${apiReccommendations.movie1_actor1}</br>
    ${apiReccommendations.movie1_actor2}</br>
    ${apiReccommendations.movie1_actor3}</br>
    `;

    title_2 = apiReccommendations.movie2_title;
    image_2 = apiReccommendations.movie2_image;
    year2 = apiReccommendations.movie2_year;

    actors2 = `
    ${apiReccommendations.movie2_actor1}</br>
    ${apiReccommendations.movie2_actor2}</br>
    ${apiReccommendations.movie2_actor3}</br>
    `;

    title_3 = apiReccommendations.movie3_title;
    image_3 = apiReccommendations.movie3_image;
    year3 = apiReccommendations.movie3_year;
    actors3 = `
    ${apiReccommendations.movie3_actor1}</br>
    ${apiReccommendations.movie3_actor2}</br>
    ${apiReccommendations.movie3_actor3}</br>
    `;
  }

  if (quizName === "Books" && apiReccommendations) {
    title_1 = apiReccommendations.book1_title;
    image_1 = apiReccommendations.book1_image;
    year1 = apiReccommendations.book1_date;
    bold1 = `Author: ${apiReccommendations.book3_author}`;

    title_2 = apiReccommendations.book2_title;
    image_2 = apiReccommendations.book2_image;
    year2 = apiReccommendations.book2_date;
    bold2 = `Author: ${apiReccommendations.book2_author}`;

    title_3 = apiReccommendations.book3_title;
    image_3 = apiReccommendations.book3_image;
    year3 = apiReccommendations.book3_date;
    bold3 = `Author: ${apiReccommendations.book3_author}`;
  }

  
  if (quizName === "Music" && apiReccommendations) {
    
  }

  
  return (
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
          <p className="font-14">
            based on your personal responses to the media mine quiz
          </p>
        </div>
      </div>
      {apiReccommendations ? (
        <div className="row mt-4">
          <div className="col-12">
            <div className="w-100">
              <span style={{ color: "var(--sea-green-crayola)" }}>
                Our best picks for you
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {title_1 && title_2 && title_3 ? (
        <React.Fragment>
          <Reccommendation
            title={title_1}
            image={image_1}
            year={year1}
            bold={bold1}
            actors={actors1}
            quizName={quizName}
          />
          <Reccommendation
            title={title_2}
            image={image_2}
            year={year2}
            bold={bold2}
            quizName={quizName}
            actors={actors2}
          />
          <Reccommendation
            title={title_3}
            image={image_3}
            year={year3}
            bold={bold3}
            quizName={quizName}
            actors={actors3}
          />
        </React.Fragment>
      ) : (
        <div>
          <h1 className="display-4">Oops.... nothing found</h1>
        </div>
      )}
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-end recalculate-holder">
            <button className="btn" onClick={() => reCalculate()}>
              Recalculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
