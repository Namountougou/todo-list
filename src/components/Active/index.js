import React from "react";
import ItemList from "../ItemList";


const Active = (tasks, deleteTask, onCompletedTask) => {
  const taskActive = tasks.filter((todo) => todo.completed === false);
  return (
    <ItemList tasks={taskActive} deleteTask={deleteTask} onCompletedTask={onCompletedTask} />
  );
};
export default Active;
