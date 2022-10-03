import { Box } from "@mui/material";
import UseTodo from "../../state-manage/hook/useTodo";
import ItemList from "../ItemList";

const Active = () => {
  const { todoActive } = UseTodo();

  if (todoActive?.length === 0) {
    return (
      <Box>
        <p>Aucun element</p>
      </Box>
    );
  }

  return <ItemList tasks={todoActive} />;
};

export default Active;
