import "./App.css";
import { Timer } from "./Timer";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoList</h1>
      </header>
      <Timer />
      <Todos />
    </div>
  );
}

export default App;
