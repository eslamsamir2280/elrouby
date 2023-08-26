import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Servies } from './pages/servies';
import Lawyer from './pages/lawyers'
import About from './pages/about';
import Mahoud from './pages/mahoud';
import Contact from "./pages/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "من_نحن",
    element: <About />,
  },
  {
    path: "الخدمات",
    element: <Servies />,
  },
  {
    path: "محموداشرف_الروبي",
    element: <Mahoud />,
  },
  {
    path: "محامين_المؤسسة",
    element: <Lawyer />,
  },
  {
    path: "تواصل_معنا",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

