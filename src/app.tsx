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
    element: <h1>Teste para só mais uma vez</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
