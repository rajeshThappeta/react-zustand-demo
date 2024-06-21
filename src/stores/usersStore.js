import { create } from "zustand";
import axios from "axios";

export const useUsersStore = create((set) => ({
  users: [],
  loadingCreateUser: false,
  loadingReadUsers: false,
  createUserSuccess: false,
  readUsersSuccess:false,
  createUserError: "",
  readUsersError:'',
  usersListModified: false,
  createUser: async (newUser) => {
    try {
      console.log("create try");
      set({ loadingCreateUser: true });

      let res = await axios.post(" http://localhost:3000/users", newUser);
      if (res.status === 201) {
        setTimeout(() => {
          set({
            loadingCreateUser: false,
            createUserSuccess: true,
            createUserError: "",
            usersListModified: true,
          });
        }, 3000);
      }
    } catch (error) {
      set({ createUserError: error.message, loadingCreateUser: false, createUserSuccess: false });
    }
  },
  getUsers: async () => {
    try {
      set({ loadingReadUsers: true });
      let res = await axios.get(" http://localhost:3000/users");
      // console.log(res.data)
      set({
        loadingReadUsers: false,
        readUsersSuccess: true,
        readUsersError: null,
        users: res.data,
        usersListModified: false,
      });
    } catch (err) {
      set({ readUsersError: err.message, loadingReadUsers: false, readUsersSuccess: false });
    }
  },
}));
