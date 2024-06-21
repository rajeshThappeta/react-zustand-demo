import React, { Fragment } from "react";
import { useTasksStore } from "../stores/tasksStore";

function TasksList() {
  let tasks = useTasksStore((state) => state.tasks);
  let deleteTaskByName = useTasksStore((state) => state.deleteTaskByName);
  return (
    <div>
      <h2>TaskList</h2>
      {tasks.map((task) => (
        <Fragment key={task}>
          <h3 >
            {task}
            <span
              className="ms-2 text-danger cursor"
              onClick={() => deleteTaskByName(task)}
            >
              x
            </span>
          </h3>
        </Fragment>
      ))}
    </div>
  );
}

export default TasksList;
