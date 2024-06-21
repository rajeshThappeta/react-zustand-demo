import { useState } from "react";
import { useUsersStore } from "../stores/usersStore";

function CreateUser() {
  let [newUser, setNewUser] = useState({ username: "", email: "", dob: "" });
  // let { createUser, loading, success, error } = useUsersStore(
  //   (state) => state
  // );

  let  createUser = useUsersStore((state) => state.createUser);
  // let loadingCreateUser=useUsersStore(state=>state.loadingCreateUser);
  // let error=useUsersStore(state=>state.error);
  // let success=useUsersStore(state=>state.success)

  console.log(useUsersStore(
    (state) => state
  ))

  function handleNewUser(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  function onNewUserSubmit(e) {
    e.preventDefault();
    //console.log(newUser);
    createUser(newUser);
  }

  return (
    <div className="mt-5 mx-auto">
      <h2>Create new User</h2>
      {/* {error?.length !== 0 && (
        <p className="fs-1 text-center text-danger">{error}</p>
      )} */}
      <form className="w-50 mx-auto mt-5" onSubmit={onNewUserSubmit}>
        <input
          type="text"
          name="username"
          value={newUser.username}
          className="form-control mb-3"
          onChange={handleNewUser}
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          className="form-control mb-3"
          onChange={handleNewUser}
        />
        <input
          type="date"
          name="dob"
          value={newUser.dob}
          className="form-control mb-3"
          onChange={handleNewUser}
        />
        <button type="submit" className="btn btn-success">
        Add
         {/* {
          loadingCreateUser===false&&success===false&&<span>Add</span>
         }
         {
          loadingCreateUser===true&&error===''&&<span>Creating new User...</span>
         }
         {
          loadingCreateUser===false&&error===''&&success===true&&<span>User created</span>
         } */}
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
