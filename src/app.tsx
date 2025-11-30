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
    element: <h1>Hello World</h1>,
  },
  {
    path: "/trips/:tipsId",
    Component: Root,
    loader: l,
    element: <h1>Teste</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
