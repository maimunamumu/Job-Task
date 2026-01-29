import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root';
import Dashboard from './Pages/Dashboard/Dashboard';
import CallLogs from './Pages/CallLogs/CallLogs';
import Appoinment from './Pages/Appoinment/Appoinment';
import Settings from './Pages/Settings/Settings';
import Profile from './Pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[
     {index:true,Component:Dashboard},
     {path:'/calllogs',Component:CallLogs},
     {path:'/appoinments',Component:Appoinment},
     {path:'/settings',Component:Settings},
     {path:'/profile',Component:Profile}
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);



