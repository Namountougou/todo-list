import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { createContext, useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../Firebase/Firebase-config";
export { TodoProvider, TodoContext };

const TodoContext = createContext([]);
const TodoProvider = ({ children }) => {
  const [newTasks, setNewTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        onSnapshot(
          query(collection(db, "todos")),
          { includeMetadataChanges: true },
          (querySnapshot) => {
            const todos = [];
            querySnapshot.forEach((doc) => {
              todos.push({ ...doc.data(), id: doc.id });
            });

            setNewTasks(todos);
          }
        );

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const deleteTask = async (task) => {
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
        await deleteDoc(doc(db, "todos", task.id));
        await Swal.fire({
          position: "top",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const onCompletedTask = async (task) => {
    await updateDoc(doc(db, "todos", task.id), {
      completed: !task.completed,
    });
  };

  const renderTasks = useCallback(
    ({ completed }) => {
      if (newTasks?.length > 0)
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
    todoActive,
    todoCompleted,
    loading,
    setLoading,
  };

  return <TodoContext.Provider value={val}>{children}</TodoContext.Provider>;
};
