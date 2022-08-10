import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/button";
import Dashboard from "./components/Dashboard";

const App = () => {
  const render = () => {
    return (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    );
  };

  const greet = () => {
    console.log("hello");
  };

  const string = "Learn React";

  return (
    <div className="App">
      <header className="App-header">
        <MyButton name={"increment"} onClick={() => alert("increetn")} />

        <MyButton name={"decrement"} onClick={() => greet("Decreent")} />
        <Dashboard userName="mark" />
        <Dashboard userName="julia" />
      </header>
    </div>
  );
};

export default App;

// parent
