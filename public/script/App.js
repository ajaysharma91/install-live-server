"use strict";

// var templateObject ={
//     title:'Java Script liabrary',
//     subtitle:'Reactjs'
// }
// var template =
// (
//     <div>
//         <h1>templateObject.title</h1>
//         <h2>templateObject.subtitle</h2>
//     </div>
// );

var template = React.createElement(
  "h1",
  null,
  "Hello This is react example after babel install 1111"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
