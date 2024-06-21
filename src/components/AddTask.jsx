import { useState } from "react";
import { useTasksStore } from "../stores/tasksStore";

function AddTask() {
  let addNewTask = useTasksStore((state) => state.addNewTask);
  let [task, setTask] = useState("");

  function handleTask(e) {
    setTask(e.target.value);
  }
  function onFormSubmit(e) {
    e.preventDefault();
    console.log(task);
    addNewTask(task);
  }

  return (
    <div>
      <h2>AddTask</h2>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name=""
          placeholder="New task..."
          className="form-control my-4"
          onChange={handleTask}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
