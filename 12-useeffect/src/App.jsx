import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);

  function aChanging() {
    console.log("value of A is changed");
  }

  function bChanging() {
    console.log("value of b is changed");
  }

  useEffect(
    function () {
      aChanging();
      // console.log("use effect is running......");
    },
    [a],
  );
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          seta(a + 1);
        }}
      >
        Change A
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setb(b - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
