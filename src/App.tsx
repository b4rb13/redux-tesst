import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: ":id",
      element: <Todo />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
