import DeleteIcon from "@mui/icons-material/Delete";
import {
Box,List,
ListItem,
ListItemIcon,
ListItemText,
Switch,
Typography
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import UseTodo from "../../state-manage/hook/useTodo";
import "../Animation.css";

const ItemList = (props) => {
  const task = props.tasks;

  const { deleteTask, onCompletedTask } = UseTodo();
  return (

    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        overflow: "auto",
      }}
    >
      {task.map((task) => (
        <Box
          key={task.id}
          sx={{
            borderRadius: "10px",
            boxShadow: 10,
            mt: "10px",
            color: "white",
            fontSize: "20px",
            bgcolor: "blue",
            fontWeight: "bold",

            ...(task.completed && {
              textDecoration: "line-through",
              boxShadow: 15,
              opacity: "0.4",
            }),
          }}
          id="anim"
        >
          <ListItem
            sx={{
              pl: 0,
            }}
            secondaryAction={
              <IconButton
                onClick={() => deleteTask(task.id)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
            }
          >
            <ListItemText
              id={task.id}
              sx={{
                pl: "10px",
              }}
            >
              <Typography
                sx={{
                  ...(task.completed && {
                    opacity: 0.5,
                    textDecoration: "line-through",
                    color: "white",
                  }),
                  marginBottom: "5px",
                }}
              >
                {task.title}
              </Typography>
            </ListItemText>
            <ListItemIcon>
              <Switch
                edge="start"
                checked={task.completed}
                onChange={() => onCompletedTask(task.id)}
                tabIndex={-1}
                sx={{
                  color: "white",
                }}
              />
            </ListItemIcon>
          </ListItem>
        </Box>
      ))}
    </List>
  );
};
export default ItemList;
