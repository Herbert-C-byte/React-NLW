import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import "./index.css";
import {CreateTripPage} from "./pages/CreateTripPage";
import {TripDetailPage}
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
    loader: ,
    element: <h1>Teste</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
