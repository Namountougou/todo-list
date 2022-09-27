import { createContext, useCallback, useState } from "react";
import Swal from "sweetalert2";

const TodoContext = createContext([]);

const TodoProvider = ({ children }) => {
  const localTodo = JSON.parse(localStorage.getItem("newTasks"));
  const [newTasks, setNewTasks] = useState(localTodo ?? []);

  const deleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      showCancelButton: true,
      position: "top",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const updatedTasks = localTodo.filter((task) => task.id !== id);
        localStorage.setItem("newTasks", JSON.stringify(updatedTasks));
        setNewTasks(updatedTasks);
        await Swal.fire( {
          position: "top",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          
          });
      }
    });
  };

  const onCompletedTask = (id) => {
    const completedTask = localTodo.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    localStorage.setItem("newTasks", JSON.stringify(completedTask));
    setNewTasks(completedTask);
  };

  const renderTasks = useCallback(
    ({ completed }) => {
      if (newTasks.length > 0)
        return newTasks.filter((task) => task.completed === completed);
      else return newTasks;
    },
    [newTasks]
  );
  const todoActive = renderTasks({ completed: false });
  const todoCompleted = renderTasks({ completed: true });
  const val = {
    deleteTask,
    onCompletedTask,
    newTasks,
    setNewTasks,
    localTodo,
    todoActive,
    todoCompleted,
  };

  return <TodoContext.Provider value={val}>{children}</TodoContext.Provider>;
};

export { TodoProvider, TodoContext };
