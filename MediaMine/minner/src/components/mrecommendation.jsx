import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function Reccommendation({ image, title, year, bold, actors, quizName }) {
  const dislike = (e) => {
    window.location.href="http://localhost:3000/recdislike"
}
  const like = (e) => {
  window.location.href="http://localhost:3000/reclike"
}
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
                <span className="results-description mt-1"></span>
              </div>
              <div className="bottom d-flex justify-content-end">

              <a href="http://localhost:3000/reclike">
                <i className="like-dislike-btns">
                  <FontAwesomeIcon icon={faThumbsUp} 
                  className="icon"
                  onclick={()=>like} />
                  </i>
                  </a>
               
                <a href="http://localhost:3000/recdislike">
                <i className="like-dislike-btns">
                  <div className="me-3 d-inline"></div>
                  <FontAwesomeIcon icon={faThumbsDown} 
                      className="icon"
                      onclick={()=>dislike}  />
                  </i>
                  </a>

                </div>
                

                <a href="http://localhost:3000/recdislike">
                  <i className="already-seen"> Already Seen?</i>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Reccommendation;
