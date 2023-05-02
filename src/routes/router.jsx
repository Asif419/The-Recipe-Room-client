import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Home/Recipes";
import Blogs from "../pages/Home/Blogs";
import UserProfile from "../pages/Home/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/recipes',
        element: <Recipes></Recipes>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs> 
      },
      {
        path: '/user-profile',
        element: <UserProfile></UserProfile> 
      },
    ]
  },
]);

export default router;