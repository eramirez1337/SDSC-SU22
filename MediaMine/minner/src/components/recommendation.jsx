import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function Reccommendation({
  image,
  title,
  year,
  bold,
  actors,
  quizName,
  already_seen,
  index,
  like_dislike,
}) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const like_change = (action) => {
    if (action === "like") {
      setLiked(!liked);
      setDisliked(false);

      if (!liked) {
        like_dislike(index, "like");
      } else {
        like_dislike(index, "remove_like");
      }
    } else {
      setLiked(false);
      setDisliked(!disliked);

      if (!disliked) {
        like_dislike(index, "dislike");
      } else {
        like_dislike(index, "remove_dislike");
      }
    }
  };
  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="w-100 results">
          <div className="result-holder">
            <div className="results-image-holder">
              <img className="results-image" src={image} alt="results" />
            </div>
            <div className="results-details-holder d-flex flex-column justify-content-between h-100">
              <div className="top d-flex flex-column">
                <span className="results-title bold">{title}</span>
                <span className="results-bold bold">{bold}</span>

                {quizName === "Movies" ? (
                  <div className="mb-3 mt-2">
                    <h6>Actors</h6>
                    <div dangerouslySetInnerHTML={{ __html: actors }} />
                  </div>
                ) : null}
                <span className="results-date">Released {year}</span>
                <span className="results-description mt-1"></span>
              </div>
              <div className="bottom d-flex justify-content-end">
                <div className="like-dislike-btns">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className={`icon ${liked === true ? "liked" : ""}`}
                    onClick={() => like_change("like")}
                  />
                  <div className="me-3 d-inline"></div>
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className={`icon ${disliked === true ? "liked" : ""}`}
                    onClick={() => like_change("dislike")}
                  />
                </div>
                <div
                  className="already-seen"
                  onClick={() => already_seen(index)}
                >
                  Already Seen?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reccommendation;
