import { useContext } from "react";
import { TodoContext } from "../Todos/TodoContext";

const UseTodo = () => {
  return useContext(TodoContext);
};

export default UseTodo;
