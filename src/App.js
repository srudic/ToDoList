import "./App.css";
import ToDoHeader from "./components/ToDoHeader/ToDoHeader";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoHeader />
      <ToDoList />
    </div>
  );
}

export default App;
