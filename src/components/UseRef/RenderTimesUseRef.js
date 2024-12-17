import React, { useEffect, useRef, useState } from "react";

const RenderTimes = () => {
  const [displayCount, setDisplayCount] = useState(0);
  // useState will re-render the component when ther is state change, so on each state chnage of renderCount will re-render the component
  //   const [renderCount, setRenderCount] = useState(0);
  //    useEffect(() => {
  //     setRenderCount(renderCount + 1);
  //   });

  //useRef will not re-render the component on state change
  const renderCount = useRef(0);
  // this will no render the component on state change of the renderCount
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="flex flex-col justify-center items-center space-y-5 h-screen">
      <p className="text-2xl font-semibold">{displayCount}</p>
      <div className="flex space-x-5">
        <button
          className="border hover:shadow-md px-5 rounded-md"
          onClick={() => setDisplayCount(displayCount + 1)}
        >
          Increase
        </button>
        <button
          className="border hover:shadow-md px-5 rounded-md"
          onClick={() => setDisplayCount(displayCount - 1)}
        >
          Descrease
        </button>
      </div>
      <p>Number of Render : {renderCount.current}</p>
    </div>
  );
};

export default RenderTimes;
