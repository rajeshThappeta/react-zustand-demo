import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [],
  addNewTask: (newTask) => {
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
  deleteTaskByName: (taskToBeDeleted) => {
    set((state) => ({
      ...state.tasks,
      tasks: state.tasks.filter((task) => task !== taskToBeDeleted),
    }));
  },
}));
