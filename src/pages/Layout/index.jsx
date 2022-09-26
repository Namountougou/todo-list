import { Box,Button,Tab,Tabs,TextField } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import Active from "../../components/Active";
import { a11yProps } from "../../components/tabs/allyprops";
import TabPanel from "../../components/tabs/Tabpanel";
import Finished from "../../components/Termine";
import All from "../../components/Tout";
import UseTodo from "../../state-manage/hook/useTodo";
function Main() {
  const [value, setValue] = useState(0);
  const [todo, setTodo] = useState("");

  const addTask = () => {
    const newTask = {
      id: new Date().getTime().toString(),
      title: todo,
      completed: false,
    };

    if (todo === "") {
      Swal.fire({
        title: "Please enter a task",
        icon: "error",
        timer: 2000,
      });
      return;
    }

    const newTodos = [...newTasks, newTask];
    setNewTasks(newTodos);
    setTodo("");
    localStorage.setItem("newTasks", JSON.stringify(newTodos));
    console.log(newTodos);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { newTasks, setNewTasks } = UseTodo();

  return (
    <>
      <Box
        sx={{
          width: "30%",
          height: "600px",
          margin: "auto",
          marginTop: "8%",
          marginBottom: "",
          bgcolor: "blue",
          borderRadius: 1,
          boxShadow: " 0 0 20px 0 blue",
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingTop: "30px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Add Todo"
            variant="outlined"
            sx={{
              width: "60%",
              height: "100%",
              borderRadius: "10px",
              bgcolor: "white",
              color: "black",
              marginRight: "20px",
              boxShadow: 20,
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
              bgcolor: "blue",
              fontWeight: "bold",
              fontSize: "20px",
              boxShadow: 20,
            }}
            onClick={addTask}
          >
            Add
          </Button>
        </Box>
        <Box sx={{ width: "100%", }}>
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
                sx={{
                  width: "33%",
                  fontWeight: "bold",
                  color: "blue",
                }}
              />
              <Tab
                key={"active"}
                label="Active"
                {...a11yProps(1)}
                sx={{
                  width: "33%",
                  fontWeight: "bold",
                  color: "blue",
                  borderRadius: 4,
                  
                }}
              />
              <Tab
                key={"termine"}
                label="Completed"
                {...a11yProps(2)}
                sx={{
                  width: "33%",
                  fontWeight: "bold",
                  color: "blue",
                }}
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
            <TabPanel value={value} index={0}>
              <All />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Active />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Finished />
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Main;
