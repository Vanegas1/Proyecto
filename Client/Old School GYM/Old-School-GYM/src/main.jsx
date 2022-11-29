import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import { ConfigProvider } from './contexts/ConfigContext';
import { UserContextProvider } from './contexts/UserContext';
import axios from 'axios';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

//Existing imports
import AppComponent from './routes/App';
import NotFound from './routes/NotFound';
import AuthView from '../views/AuthView/AuthView';
import UserView from '../views/UserView/UserView';

const router = createBrowserRouter([

  {
    path: "/",
    element: <AppComponent />,
  },
  {
    path: "auth/*",
    element: <AuthView />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "auth/signin/whoiam/",
    element: <UserView />,
  },
  {
    path: "auth/signin/whoiam/rutina",
  }
])

axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || "http://localhost:3500/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider>
      <UserContextProvider>
        <LoadingSpinner />
        <RouterProvider router={router}/>
        <ToastContainer theme="light" position="top-right" />
      </UserContextProvider>
    </ConfigProvider>
  </React.StrictMode>
)
