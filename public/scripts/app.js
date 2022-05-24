"use strict";

console.log("App is running"); //JSX - JavaScript XML

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecision App - Test"), /*#__PURE__*/React.createElement("h2", null, "Test"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Testing"), /*#__PURE__*/React.createElement("li", null, "Working Model")));
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Cole Webster"), /*#__PURE__*/React.createElement("p", null, "Age: 34"), /*#__PURE__*/React.createElement("p", null, "Location: Tampa")); //Create a templateTwo variable
// div
//  h1 -> Name
//  p - age: 34
//  p - Location: Tampa
//Render templateTwo

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
