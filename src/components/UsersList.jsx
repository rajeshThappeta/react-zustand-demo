import { useEffect } from "react";
import { useUsersStore } from "../stores/usersStore";

function UsersList() {
  let users=useUsersStore(state=>state.users);
  let getUsers=useUsersStore(state=>state.getUsers)
  let usersListModified=useUsersStore(state=>state.usersListModified)

 // console.log("users :", users);
  useEffect(()=>{
    getUsers()
  },[])
  console.log("list",usersListModified)

  return (
    <div className="text-center my-5 ">
      <h2 className="text-info">List of Users</h2>
      {/* {
        users.length!==0&&loadingReadUsers===true&&<p className='spinner-border text-info'></p>
      } */}
      {users.length === 0 ? (
        <p className="display-3 text-secondary">No Users</p>
      ) : (
        <table className="table w-75 mx-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Date of birth</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsersList;
