import { Box } from "@mui/material";
import UseTodo from "../../state-manage/hook/useTodo";
import ItemList from "../ItemList";

const All = () => {
  const { newTasks } = UseTodo();
  if (newTasks.length === 0) {
    return (
      <Box>
        <p> Aucun element</p>
      </Box>
    );
  }
  return <ItemList tasks={newTasks} />;
};

export default All;
