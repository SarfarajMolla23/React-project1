import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>Custom App ! </h1>
    </>
  );
}
// const reactElement ={
//   type: 'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
const anotherUser = "React done";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to Visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  //MyApp()
  //<MyApp />
  reactElement
  // <App />
);
