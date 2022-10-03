import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Active from "../../components/Active";
import All from "../../components/All";
import Finished from "../../components/Finished";
import { a11yProps } from "../../components/Tabs/allyprops";
import TabPanel from "../../components/Tabs/Tabpanel";
import { db } from "../../Firebase/Firebase-config";
import useTodo from "../../state-manage/hook/useTodo";
function Main() {
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("");

  const { loading, setLoading } = useTodo();

  const addTask = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title: title,
        completed: false,
      });
      setTitle("");

      return;
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: "25%",
          minHeight: "600px",
          margin: "auto",
          marginTop: "8%",
          marginBottom: "",
          borderRadius: 1,
          boxShadow: " 0 0 30px 0 rgba(0,0,0,0.5)",
          bgcolor: "transparent",
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
              borderRadius: 2,
              bgcolor: "",
              color: "black",
              marginRight: "20px",
              boxShadow: 10,
              fontSize: "20px",
              fontWeight: "bold",
            }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        <Box sx={{ width: "100%" }}>
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
              {loading ? (
                <div className="flex justify-center items-center">
                  <div
                    className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full m-12"
                    role="status"
                  >
                    <span className="visually-hidden" />
                  </div>
                </div>
              ) : (
                <All />
              )}
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
