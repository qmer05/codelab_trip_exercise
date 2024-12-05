import { useEffect, useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Trips from "./pages/Trips";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Guides from "./pages/Guides";
import Trip from "./pages/Trip";
import facade from "./util/apiFacade";

const App = () => {
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [trips, setTrips] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // Set initial state based on token

  const urlTrips = "https://tripapi.cphbusinessapps.dk/api/trips";

  // Fetch trips data when the component mounts
  useEffect(() => {
    fetch(urlTrips)
      .then((response) => response.json())
      .then((data) => {
        setFilteredTrips(data); // For rendering filtered trips
        setTrips(data); // Keep the original list intact
      })
      .catch((error) => console.error("Error fetching trips:", error));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Home
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route
          path="/trips"
          element={
            <Trips
              trips={trips}
              setFilteredTrips={setFilteredTrips}
              filteredTrips={filteredTrips}
            />
          }
        />
        <Route path="/guides" element={<Guides loggedIn={loggedIn} />} />
        <Route path="/trip" element={<Trip />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
