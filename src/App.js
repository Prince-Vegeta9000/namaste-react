import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");
// React.createElement accepts three parameters. These are following:
//1. tags
//2. attributes. Example: {id:'heading'}
//3. Value of the tag
const heading = React.createElement(
  "h1",
  { id: "heading", class: "heading" },
  "Hello World From React"
);
// React.createElement returns the react element
// How do we create nested elements.
// lets say we want to create the following structure:
{
  /* <div id ="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div> */
}

// first create parent div and add child in third parameter

// to add siblings , the third parameter of creatElement should be an array
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

// React elements can be created using JSX as well
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
// It allows you to write HTML-like code within JavaScript, making it easier to create and visualize the structure of your UI components.
// JSX is not valid JavaScript, so it needs to be transpiled into JavaScript using a tool like Babel before it can be executed by the browser.

// round brackets are used to embed JS expressions in JSX. It is also help babel to understand that the code is multi-line
const jsxHeading = (
  <h1 id="heading" className="heading">
    Hello World From React
  </h1>
);

//React component is a function that returns a react element.
// React component can be created using function or class
// React component can be created using function

const HeadingComponent = () => <h1>React Component Using Function</h1>;

//what is component composition
// Component composition is a powerful concept in React that allows you to build complex UIs by combining smaller, reusable components.
// It enables you to create a hierarchy of components, where each component can contain other components as children.
// This approach promotes reusability, maintainability, and a clear separation of concerns in your codebase.
const Header = () => (
  <header>
    <nav>
      <a href="#">Home</a>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </nav>
  </header>
);

const Body = () => (
  <div>
    <h1>Body</h1>
    <p>This is the body of the page.</p>
  </div>
);

const Footer = () => (
  <footer>
    <p>Footer</p>
  </footer>
);
const Container = () => {
  return (
    <div id="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<Container />);
