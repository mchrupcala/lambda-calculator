import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import {numbers} from "../../../data.js";



const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log(numberState);
  console.log(numbers);

  return (
    <div>
      {numbers.map(item => <NumberButton buttonValue={item}/>
      )
        
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       }
    </div>
  );
};

export default Numbers;



//I don't need to import Numbers.js to NumberBUtton.js....why? I thought NumberButton was the child...apparently it's flipped around.