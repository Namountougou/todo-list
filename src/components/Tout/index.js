import React, { useEffect } from "react";
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
import ItemList from "../ItemList";

const All = (tasks, deleteTask, onCompletedTask) => {
  return (
    <>
      <ItemList
        tasks={tasks}
        deleteTask={deleteTask}
        onCompletedTask={onCompletedTask}

      />

    </>
  );
};

export default All;
