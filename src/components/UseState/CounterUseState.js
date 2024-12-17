import React, { useState } from "react";

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const [score, setScore] = useState({ name: "Sumit", score: 0 });

  const handleClick = () => {
    setScore((prev) => ({ ...prev, score: prev.score + 1 }));
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <p className="text-2xl font-bold">
        {score.name} : {score.score}
      </p>
      <button className="border px-5 hover:shadow-md" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
