import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import UseTodo from "../../state-manage/hook/useTodo";
import "../Animation.css";

const ItemList = (props) => {
  const tasks = props.tasks;
  const { deleteTask, onCompletedTask } = UseTodo();
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        overflow: "auto",
      }}
    >
      {tasks.map((task) => (
        <Box
          key={task.id}
          sx={{
            borderRadius: "10px",
            mt: "10px",
            color: "",
            fontSize: "20px",
            border: "1px solid #ccc",
            fontWeight: "bold",
            pl: "10px",

            ...(task.completed && {
              textDecoration: "line-through",
              border: "1px solid red",
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
                onClick={() => deleteTask(task)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
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
                  fontSize: "16px",
                  fontWeight: "bold",
                  ...(task.completed && {
                    textDecoration: "line-through",
                    color: "red",
                    opacity: 0.6,
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
                onChange={() => onCompletedTask(task)}
                tabIndex={-1}
              />
            </ListItemIcon>
          </ListItem>
        </Box>
      ))}
    </List>
  );
};
export default ItemList;
