import React from "react";
import Star from "./Star";

function Rating() {
  const [stars, setStars] = React.useState([
    {clicked: false, focus: false, active: false},
    {clicked: false, focus: false, active: false},
    {clicked: false, focus: false, active: false},
    {clicked: false, focus: false, active: false},
    {clicked: false, focus: false, active: false}
  ]);

  function handleClick(id) {
    const arr = [];
    stars.map(
      (star, index) => {
        if (id >= index) {
          arr.push({
            clicked: true,
            focus: star.focus,
            active: star.active
          });
        } else {
          arr.push({
            clicked: false,
            focus: star.focus,
            active: star.active
          });
        }
      });
    setStars(arr);
    //console.log(arr);
  }

  function handleUnFocus(id) {
    const arr = [];
    stars.map(
      (star, index) => {
        arr.push({
          clicked: star.clicked,
          focus: false,
          active: star.clicked
        });
      });
    setStars(arr);
    console.log(arr);
  }

  function handleFocus(id) {
    const arr = [];
    stars.map(
      (star, index) => {
        if (id >= index) {
          arr.push({
            clicked: star.clicked,
            focus: true,
            active: true
          });
        } else {
          arr.push({
            clicked: star.clicked,
            focus: false,
            active: false
          });
        }
      });
    setStars(arr);
    console.log(arr);
  }

  return(
    <div className="rating">

      {stars.map((star, index) => 

        <Star key={index} 
              id={index}
              active={star.active }
              handleClick={handleClick}
              handleFocus={handleFocus}
              handleUnFocus={handleUnFocus}
        /> 
      )}

    </div>
  );
}

export default Rating;