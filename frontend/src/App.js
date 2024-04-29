function App() {
  const [todos,]
  return (
    <div className="container">
    <div className="addTask">
      <form>
        <input id="input" type="text" placeholder="Add your task" />
        <button id="add" className="btn">Add Task</button>
      </form>
    </div>
    <div className="taskList">
      <ul>
         <li>
          <span>Do the dishes</span>
          <button id="delete" className="btn">Delete Task</button>
        </li> 
      </ul>
    </div>
  </div>
  );
}

export default App;
