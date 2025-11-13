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
]);

function App() {
  return <h1>Hello World!</h1>
}

export default App
