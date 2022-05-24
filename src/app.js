console.log("App is running");

//JSX - JavaScript XML
const template = (
  <div>
    <h1>Indecision App - Test</h1>
    <h2>Test</h2>
    <ol>
      <li>Testing</li>
      <li>Working Model</li>
    </ol>
  </div>
);

const templateTwo =(
    <div>
        <h1>Cole Webster</h1>
        <p>Age: 34</p>
        <p>Location: Tampa</p>
    </div>
)

//Create a templateTwo variable
// div
//  h1 -> Name
//  p - age: 34
//  p - Location: Tampa
//Render templateTwo
const appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
