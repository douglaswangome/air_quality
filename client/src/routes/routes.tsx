import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Pages
const Dashboard = lazy(() => import("../pages/Dashboard"));

const routes = createBrowserRouter([{ path: "/", element: <Dashboard /> }]);

export default routes;
