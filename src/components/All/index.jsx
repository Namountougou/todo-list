import { Box } from "@mui/material";
import UseTodo from "../../state-manage/hook/useTodo";
import ItemList from "../List";

const All = () => {
  const { newTasks } = UseTodo();
  
  return <ItemList tasks={newTasks} />;
};

export default All;
