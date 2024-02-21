import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'



import Home from "./components/Home";
import ButtonTap from "./components/ButtonTap";
import Keyframe from "./components/Keyframe";
import Simple from "./components/Simple";
import TextMotion from "./components/TextMotion";
import TransitionType from "./components/TransitionType";
import Variants from "./components/Variants";
import Counter from "./components/Counter";
import ScrollReveal from "./components/ScrollReveal";
import Root from "./Routes/Root"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';




const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,

    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/button",
        element: <ButtonTap />
      },
      {
        path: "/Counter",
        element: <Counter />
      },
      {
        path: "/simple",
        element: <Simple />
      },
      {
        path: "/text-motion",
        element: <TextMotion />
      },
      {
        path: "/transition",
        element: <TransitionType />
      },
      {
        path: "/keyframe",
        element: <Keyframe />
      },
      {
        path: "/variants",
        element: <Variants />
      },
      {
        path: "/scroll",
        element: <ScrollReveal />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
