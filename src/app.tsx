import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CreateTripPage from "./pages/create-trip";
import TripDetailsPage from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
