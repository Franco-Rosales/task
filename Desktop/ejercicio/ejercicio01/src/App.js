import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskProvider from "./store/TaskProvider";


function App() {
  return (
    <div>
      <h1>Task App</h1>
      <TaskProvider>
        <TaskForm />
        <TaskList/>
      </TaskProvider>
    </div>
  );
}

export default App;
