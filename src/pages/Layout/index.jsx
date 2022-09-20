import React, { useCallback } from "react";
import { useState } from "react";
import { Box, Tabs, Tab, TextField, Button } from "@mui/material";
import Tabpanel from "../../components/tabs/Tabpanel";
import { a11yProps } from "../../components/tabs/allyprops";
import All from "../../components/Tout";
import Active from "../../components/Active";
import Termine from "../../components/Termine";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function Main() {
  const [value, setValue] = useState(0);
  const [todo, setTodo] = useState("");
  const [newTasks, setNewTasks] = useState([]);
  const addTask = () => {
    const newTask = {
      id: new Date().getTime().toString(),
      title: todo,
      completed: false,
    };

    if (todo === "") {
      toast.error("Please enter a task");
      return;
    }
    setNewTasks([...newTasks, newTask]);
    setTodo("");
    localStorage.setItem("newTasks", JSON.stringify(newTasks));
    console.log(newTasks);
  };
  const localTodo = JSON.parse(localStorage.getItem("newTasks"));

  const handleChange = (event, newValue) => {
    // if newValues is 1, then it is the active tab
    setValue(newValue);
  };

  const deleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = localTodo.filter((task) => task.id !== id);
        localStorage.setItem("newTasks", JSON.stringify(updatedTasks));
        setNewTasks(updatedTasks);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };


  const onCompletedTask = (id) => {
    const completedTask = localTodo.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    localStorage.setItem("newTasks", JSON.stringify(completedTask));
    setNewTasks(completedTask);
  };

  const renderTasks = useCallback(
    ({ completed }) => {
      return localTodo.filter((task) => task.completed === completed);
    },
    [localTodo]
  );

  return (
    <>
      <Box
        sx={{
          width: "30%",
          height: "600px",
          margin: "auto",
          marginTop: "8%",
          marginBottom: "",
          bgcolor: "white",
          borderRadius: 1,
          boxShadow: 10,
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingTop: "30px",
          }}
        >
          <form className="">
            <TextField
              id="outlined-basic"
              label="Add Todo"
              variant="outlined"
              sx={{
                bgcolor: "",
                width: "60%",
                height: "100%",
                borderRadius: "10px",
                bgcolor: "white",
                color: "black",
                marginRight: "20px",
              }}
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{
                width: "20%",
                height: "55px",
                padding: "",
              }}
              onClick={addTask}
            >
              Add
            </Button>
          </form>
        </Box>
        <Box sx={{ width: "100%", border: "", borderColor: "" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "100%",
              paddingTop: "10px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                key={"all"}
                label="All"
                {...a11yProps(0)}
                sx={{ width: "33%" }}
              />
              <Tab
                key={"active"}
                label="Active"
                {...a11yProps(1)}
                sx={{ width: "33%" }}
              />
              <Tab
                key={"termine"}
                label="Termine"
                {...a11yProps(2)}
                sx={{ width: "33%" }}
              />
            </Tabs>
          </Box>
          <Box
            sx={{
              maxHeight: "400px",
              overflowY: "scroll",
              overflowX: "hidden",
              width: "100%",
              "&::-webkit-scrollbar": {
                width: "0",
              },
            }}
          >
            <Tabpanel value={value} index={0}>
              {All(localTodo, deleteTask, onCompletedTask)}
            </Tabpanel>
            <Tabpanel value={value} index={1}>
              {Active(
                renderTasks({ completed: false }),
                deleteTask,
                onCompletedTask
              )}
            </Tabpanel>
            <Tabpanel value={value} index={2}>
              {Termine(
                renderTasks({ completed: true }),
                deleteTask,
                onCompletedTask
              )}
            </Tabpanel>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Main;
