import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
//   return <h4>safil the developer </h4>;
// }

//--------------------------------------

// function Greeting(){
//   return React.createElement('h1',{},'safil through react element')
// }

//--------------------------------------

//if we wanted to add div in same function we need to add one more react.createelement

// function Greeting(){
//   return React.createElement('div',{},React.createElement('h1',{},'safil through react create element but its easier to use html format'))
// }

//--------------------------------------

//func above and below are same . below one is more user friendly

// function Greeting() {
//   return (
//     <div>
//       <h2>Safil the developer</h2>
//       <h1>Next form</h1>
//       <ul>
//         <li>form data 1</li>
//         <li>form data 2</li>
//       </ul>
//     </div>
//   );
// }

function Greeting() {
  return (
    <h1>hello safil</h1>
  );
}



ReactDom.render(
  <Greeting />,

  document.getElementById("root")
);



