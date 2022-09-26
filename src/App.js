import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./routes";
import { TodoProvider } from "./state-manage/Todos/TodoContext";
function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Home />,
    },
  ]);

  return (
    <div className="App">
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </div>
  );
}

export default App;
