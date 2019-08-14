import React from "react";
import Numbers from "./Numbers.js";

const NumberButton = props => {

  return (
    <button className="nuButton"> {props.buttonValue}

    
    
    </button>
      /* Display a button element rendering the data being passed down from the parent container on props */
    
  );
};

export default NumberButton;

// This file's the child element of Number.js...it's the button, and receives the props data.