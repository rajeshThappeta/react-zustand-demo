import React from "react";
import AddTask from "./components/AddTask";
import CreateUser from "./components/CreateUser";
import TasksCount from "./components/TasksCount";
import TasksList from "./components/TasksList";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="text-center container">
      <h1>Manage Tasks</h1>
      {/* <div className="row mx-auto mt-5 container bg-dark text-light p-5">
        <div className="col-sm-4">
          <AddTask />
        </div>
        <div className="col-sm-4">
          <TasksList />
        </div>
        <div className="col-sm-4">
          <TasksCount />
        </div>
      </div>

      <div className="row my-5 bg-info p-5 w-50 mx-auto">
        <CreateUser />
      </div>
      <div className="row my-5 bg-secondary p-4">
        <UsersList />
      </div> */}
       <div className="row mt-5">
        <Test1 />
        <Test2 />
      </div> 
    </div>
  );
}

export default App;
