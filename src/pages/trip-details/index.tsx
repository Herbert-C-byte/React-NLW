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
    path: "/teste",
    Component: Root,
    loader: loadRootData,
    element: <h1>Teste</h1>,
  },
]);