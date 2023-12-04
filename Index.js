import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", {id:"parent"} , [ React.createElement("h1", {id : "child"}), [React.createElement("h1",{}, "My second heading 🚀"),React.createElement("h2",{}, "My second heading") ],
[React.createElement("h1", {id : "child"}), React.createElement("h1",{}, "My second heading"),React.createElement("h2",{}, "My second heading") ] 
]  );

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);