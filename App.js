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
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(parent);
