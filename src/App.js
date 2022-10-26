
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Faq from './components/FAQ/Faq';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MoreDetails from './components/MoreDetails/MoreDetails';
import Premium from './components/Premium/Premium';
import PrivateRoute from './components/Private/PrivateRoute';
import Register from './components/Register/Register';

import Main from './Layout/Main';

function App() {

const router = createBrowserRouter([
  {
    path:'/',
     errorElement:<Faq></Faq>,
    element:<Main></Main>,
   
    children: [
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/courses',
        element:<Courses></Courses>,
        loader: () => fetch('https://best-learners-server.vercel.app/categories')
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      // {
      //   path:'/faq',
      //   element:<Faq></Faq>
      // },
      {
        path:'/:id',
        element:<MoreDetails></MoreDetails>,
        loader: ({params}) => fetch(`https://best-learners-server.vercel.app/categories/${params.id}`)
      },
      {
        path:'/premium',
        element:<PrivateRoute><Premium></Premium></PrivateRoute>
      },
    ]
  }
])

  return (
    <div >
          <RouterProvider router={router}>

          </RouterProvider>
    </div>
  );
}

export default App;
