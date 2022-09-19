import React from "react";
import { Box, Divider, TextField, Button, Switch, Typography } from "@mui/material";
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
import ItemList from "../ItemList";

const Termine = (tasks, deleteTask, onCompletedTask) => {
  const taskFinished = tasks.filter((task) => task.completed === true);
  return (
    <ItemList tasks={taskFinished} deleteTask={deleteTask} onCompletedTask={
      onCompletedTask
    } />
  );
};

export default Termine;
