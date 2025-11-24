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
    element: <h1>Teste</h1>,
  },
]);

function App() {
  return <h1>Hello World! just checking</h1>
}

export default App
