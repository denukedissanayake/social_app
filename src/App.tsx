import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Leftpannel from "./components/left-pannel/left-pannel";
import Navbar from "./components/navbar/navbar";
import Rightpannel from "./components/right-pannel/right-pannel";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Signup from "./pages/signup/signup";

const isLoggedIn = true;

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div style={{display: "flex"}}>
        <Leftpannel/>
        <Outlet/>
        <Rightpannel/>
      </div>
    </div>
  );
}

const ProtectedRoutes = ({children} : any) => {
  if(!isLoggedIn){
    return <Navigate to="/login"/>;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (    
      <ProtectedRoutes>
        <Layout/>,
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/profile/:pid",
        element: <Profile/>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
