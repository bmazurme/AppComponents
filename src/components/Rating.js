import React from "react";
import Star from "./Star";

function Rating() {
  const [stars, setStars] = React.useState([
    {clicked: false, active: false},
    {clicked: false, active: false},
    {clicked: false, active: false},
    {clicked: false, active: false},
    {clicked: false, active: false}
  ]);

  function handleClick(id) {
    const arr = [];
    let i = 0;
    stars.forEach(item => {if (item.clicked) i++});
    const val = (id-i >= -1) ? !stars[id].clicked : true;

    stars.map(
      (star, index) => {
        if (id >= index) {
          return arr.push({
            clicked: val,
            active: star.active
          });
        } else {
          return arr.push({
            clicked: false,
            active: star.active
          });
        }
      });
    setStars(arr);
  }

  function handleFocus(id) {
    const arr = [];
    stars.map(
      (star, index) => {
        if (id >= index) {
          return arr.push({
            clicked: star.clicked,
            active: true
          });
        } else {
          return arr.push({
            clicked: star.clicked,
            active: false
          });
        }
      });
    setStars(arr);
  }

  function handleUnFocus() {
    const arr = [];
    stars.map(
      (star) => {
        return arr.push({
          clicked: star.clicked,
          active: star.clicked
        });
      });
    setStars(arr);
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