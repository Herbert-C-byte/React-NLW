import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import "./index.css";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: loadRootData,
  },
  {
    path: "/teste",
    Component: Root, // just testing
    loader: loadRootData, // just testing
  },
]);

function App() {
  return <h1>Hello World! just checking</h1>
}

export default App
