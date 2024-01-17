const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "I'm heading1 of div1"),
    React.createElement("h2", { id: "h2" }, "I'm heading2 of div1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "I'm heading1 of div2"),
    React.createElement("h2", { id: "h2" }, "I'm heading2 of div2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/**
 * 
<div>
    <h1>
    </h1>
    <h2>
    </h2>
</div>

<div>
    <h1>
    </h1>
    <h2>

    </h2>
</div>
 */
