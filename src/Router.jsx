import { createBrowserRouter } from "react-router-dom";
import Sea from './pages/Sea.jsx';
import Sky from './pages/Sky.jsx';
import Desert from './pages/Desert.jsx';
import Forest from './pages/Forest.jsx';
import Space from './pages/Space.jsx';
import ErrorPage from './error-page.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Sea />, 
        errorElement: <ErrorPage />,
      },
  {
    path: "/sky",
    element: <Sky />,
  },
  {
    path: "/desert",
    element: <Desert />,
  },
  {
    path: "/forest",
    element: <Forest />,
  },
  {
    path: "/space",
    element: <Space />,
  },

]);

export default router;
