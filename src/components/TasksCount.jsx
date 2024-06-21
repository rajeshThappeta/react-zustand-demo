import React from "react";
import { useTasksStore } from "../stores/tasksStore";

function TasksCount() {
  let tasks = useTasksStore((state) => state.tasks);
  return (
    <div>
      <h2>TasksCount</h2>
      <h3>{tasks.length}</h3>
    </div>
  );
}

export default TasksCount;
