import React from "react";
import ReactDOM from "react-dom/client";



// BUNDLERS -- vite, webpack - create-reacta-app , parcel
// why you use npm ?
// because react need lot of helper packages for some tasks like minify,optimize etc for that we need npm
//  React need to do so many things for that it needs packages (dependencies)
// here React is like a gobal variable which comes from injected files.
const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 1"
);
 // react gives us this api to create an element.
// React - it is the core library of react , if we are using react native , it will be there also

// console.log(heading);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    key: "h2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "world",
    // property can be anything
  },
  [heading, heading2]
);

// whatever we pass inside the createRoot it will become root of the app.
const root = ReactDOM.createRoot(document.getElementById("root")); // it is used , because we are modifying the dom

// passing a react element inside a root
// root.render(heading);
// root.render(container);

// async and defer




// JSX :

const header = (  // react element
    <h1 id="logo" key="h1">
        Logo
    </h1>
);

const Header2 = () => (  // react component
    <h1 id="logo" key="h1">
        Logo
    </h1>
);

// React component

// functional component -- new
// class based component -- old

// component composition --> if i use component inside a component

const HeaderComponent = () => {
    return(
        <div>
            {header}
            {console.log("Any Js code")}
            {/* if it is react element */}
            <Header2 /> 
            {/* or {Header2()} */}
            {/* if it is a react component */}
            <h2>Namaste Functional Component</h2>
            <h2>this is h2 tag</h2>
        </div>
    );
}

// we can write return or we can skip

// const HeaderComponent2 = () => {
//     <div>
//         <h1>Namaste Functional Component</h1>
//         <h2>this is h2 tag</h2>
//     </div>
// }

// root.render(heading); -- when i render my react element

root.render(<HeaderComponent />) 
// root.render(HeaderComponent()); it is fine 
// -- when i render my functional component (react component)

// root.render() requires react code.

