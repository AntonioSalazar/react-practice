import React from "react"

const improvedCard = (props) => {
  let awardTxt ;

  if(props.hasOscars){
    if(props.IMDbRating >= 9) {
      awardTxt = <p>Wow! Oscar award and IMDbRating of {props.IMDbRating}</p>
    } else if( props.IMDbRating >= 7){
      awardTxt = <p>Got an Oscar award, IMDbRating of {props.IMDbRating}</p>
    } else {
      awardTxt = <p>Great movie but no Oscars, IMDbRating of { props.IMDbRating }</p>
    }
  }

  return(
    <div className="movies-list-item">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      {/* {props.hasOscars && <p>Got an Oscar Award </p>}
      {!props.hasOscars && <p>Great movie, but no Oscars </p>} */}
      {awardTxt}
      <button onClick={props.clickToDelete}>Delete</button>
    </div>
  )
}

export default improvedCard