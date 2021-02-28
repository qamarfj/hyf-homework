import "./App.css";
import { Timer } from "./Timer";
import { todos } from "./todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoList</h1>
      </header>
      <Timer />
    </div>
  );
}

export default App;
