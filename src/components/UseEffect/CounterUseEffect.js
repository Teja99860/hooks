import React, { useEffect, useState } from "react";

const CounetrUseEffect = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  // note if i didn't used useeffect for this, then it act same as useEffect without any dependency that means it will always re-render the component in any state change and at last forms the infinate loop
  //   setInterval(() => {
  //     setCount(count + 1);
  //   }, 2000);
  //   console.log(count);

  // useEffect case 01 - without dependency - re-render the component in any state change in the component-> which leads to infinite loop of re-render.

  // useEffect case 02 - with empty dependency - re-render the component only onceon the 1st state change -> render only once.

  //case 3 - with dependency -> re-renders the component when ever state passed in dependency array are changed. 
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 2000);
  }, [count]);
  console.log(count);

  //   const handleClick = () => {
  //     setScore(score + 1);
  //   };
  return (
    <div className="flex flex-col text-2xl font-bold justify-center items-center h-screen">
      <p>I have rendered {count} times</p>
      {/* <p >{score}</p>
      <button onClick={handleClick}>click for state change of score</button> */}
    </div>
  );
};

export default CounetrUseEffect;
