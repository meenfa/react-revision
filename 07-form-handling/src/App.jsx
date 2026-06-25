import React from "react";

const App = () => {
  const submitHandler = () => {
    console.log("form is submitted");
  };

  return (
    <div>
      <h2>Form handling in react</h2>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
