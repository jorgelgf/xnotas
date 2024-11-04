import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home, OnlyCards } from '../Pages';

export const AppRouter = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/OnlyCards",
    element: <OnlyCards />,
  },
  {
    path: "*",
    element: <Navigate to='home' />,
  }
]);