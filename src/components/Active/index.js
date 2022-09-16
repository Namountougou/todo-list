import React from "react";
import {
  Box,
  Divider,
  TextField,
  Button,
  Switch,
  Typography,
} from "@mui/material";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Task } from "@mui/icons-material";

const Active = (tasks, deleteTask, onCompletedTask) => {
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {tasks.map((task) => (
          <>
            <ListItem
              sx={{
                pl: 0,
              }}
              key={task.id}
              secondaryAction={
                <IconButton
                  onClick={() => deleteTask(task.id)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText id={task.id}>
                <Typography
                  sx={{
                    ...(task.completed && {
                      opacity: 0.5,
                      textDecoration: "line-through",
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
                />
              </ListItemIcon>
            </ListItem>
            <Divider sx={{ border: "solid 1px" }} />
          </>
        ))}
      </List>
    </>
  );
};

export default Active;
