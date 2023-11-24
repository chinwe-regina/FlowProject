import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import HomeScreen from "../pages/Homescreen";
import Sign_in from "../pages/Sign_in";
import PrivateRoute from "./PrivateRouter";
import Register from "../auth/Register";
import Login from "../auth/Login";
import RegisterBroMo from "../auth/BromoRegister";
import RegisterFreeMo from "../auth/FreeMoRegister";
import RegisterPreMo from "../auth/PreMoRegister";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        // index: true,
        path: "/dark",
        element: <HomeScreen />,
      },
    ],
  },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register-freemo",
        element: <RegisterFreeMo />,
      },
      {
        path: "/register-bromo",
        element: <RegisterBroMo />,
      },
      {
        path: "/register-Premo",
        element: <RegisterPreMo />,
      },
]);
