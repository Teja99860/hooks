import React, { useMemo, useState } from "react";

const CubeANumber = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  //   const [cubeValue, setCubeValue] = useState(0);

  const cubeOfNumber = (num) => {
    console.log("cube calculated");
    return Math.pow(num, 3);
  };

  // so i can do that using the useEffect Hook but for that i need additional variable to store that like cubeValue which is another state value, so iinstead i can do that using the useMemo() hook
  //   useEffect(() => {
  //     setCubeValue(cubeOfNumber(number));
  //   }, [number]);

  // useMemo - useMemo is used to have the Memozied value.
  //         - useMemo will be re-render only if the dependency array state are changed.
  //         - useMemo take to arguments, 1 - callbackfuntion 2- dependency array
  //         - if no dependency -> then it will re-render on every state change in the component, if empty dependency -> it run only once and the cueValue will not be updated since it runs only once, if any dependency -> re-render the change those state which are in the depenency array
  const cubeValue = useMemo(() => {
    return cubeOfNumber(number);
  }, [number]);

  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-screen">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="border indent-2"
      />
      <h1>The cube of the number : {cubeValue}</h1>
      <h1 className="text-2xl font-semibold">Count : {count}</h1>
      <button
        className="border hover:shadow-md px-4"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
};
export default CubeANumber;
