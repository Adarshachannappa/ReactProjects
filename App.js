import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const Title = ()=> (
  <h1 id="title" key="heading">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h1>This is from React functional component</h1>
      <h1>Child element</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
