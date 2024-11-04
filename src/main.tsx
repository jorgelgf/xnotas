import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRouter } from './Routes';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <>
    <ToastContainer />
    <RouterProvider router={AppRouter} />
  </>
)
