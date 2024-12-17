import React, { useRef } from "react";
// using the useRef hook and ref attribute wqe can select the Dom elements
const SelectDomElement = () => {
  const selectInput = useRef();
  // in this we have the input DOM element in the selectInput.current value that means now this selectInput holds that element we can alter this elements like style, innerHTML etc...

  const handleClick = () => {
    console.log(selectInput.current);
    // we can select the Dom element and change its style or other things
    selectInput.current.style.background = "blue";
  };

  // useRef - it does not re-render on state change
   //       - it used to select the DOM element
   
  return (
    <section className="flex flex-col h-screen justify-center items-center space-y-5">
      <input type="text" className="border" ref={selectInput} />
      <button onClick={handleClick} className="border px-4 hover:shadow-md">
        Click here select Input
      </button>
    </section>
  );
};
export default SelectDomElement;
