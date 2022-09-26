import { Box } from "@mui/material";
import UseTodo from "../../state-manage/hook/useTodo";
import ItemList from "../ItemList";

const Finished = () => {
  const { todoCompleted } = UseTodo();

  if (todoCompleted.length === 0) {
    return (
      <Box>
        <p>Aucun element</p>
      </Box>
    );
  }

  return <ItemList tasks={todoCompleted} />;
};

export default Finished;
