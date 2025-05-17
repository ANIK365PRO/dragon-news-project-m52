import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Components/Pages/Home';
import CategoryNews from '../Components/Pages/CategoryNews';

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
    element: <h2>Authentication layout</h2>,
  },
  {
    path: '/news',
    element: <h2>News layout</h2>,
  },
  {
    path: '/*',
    element: <h2>Error 404</h2>,
  },
]);

export default router;
