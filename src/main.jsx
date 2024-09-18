import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LayOut from './LayOut/LayOut';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,

    children: [

   {
    path: '/login',
    element: <LogIn></LogIn>
   },

   {
    path: '/signup',
    element: <SignUp></SignUp>
   }



    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
