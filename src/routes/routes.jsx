import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Components/Pages/Home';
import CategoryNews from '../Components/Pages/CategoryNews';
import AuthLayout from '../Components/HomeLayout/AuthLayout';
import Login from '../Components/Pages/Login';
import Register from '../Components/Pages/Register';
import NewsDetails from '../Components/Pages/NewsDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        loader: () => fetch('/news.json'),
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/news-details/:id',
    element: <NewsDetails></NewsDetails>,
  },
  {
    path: '/*',
    element: <h2>Error 404</h2>,
  },
]);

export default router;
