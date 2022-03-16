import React from "react";
import Star from "./Star";

function Rating() {
  const [stars, setStars] = React.useState([false, false, false, false, false]);

  function handleClick() {
    

    //setSwitcher(!switcher);
  }

  return(
    <div className="rating">

      {stars.map((star, index) => 
        <Star key={index} 
              active={star}
              handleClick={handleClick}
        />
      )}

    </div>
  );
}

export default Rating;