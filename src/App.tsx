import { useContext } from "react";
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
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/DarkmodeContext";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Signup from "./pages/signup/signup";

const App = () => {

  const {darkmode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  
  const Layout = () => {
    return (
      <div className={`theme-${darkmode === 'true' ? `dark` : `light`}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <Leftpannel/>
          <div style={{flex:5}}>
            <Outlet/>
          </div>
          <Rightpannel/>
        </div>
      </div>
    );
  }
  
  const ProtectedRoutes = ({children} : any) => {
    if(!currentUser?.id){
      return <Navigate to="/login"/>;
    }
  
    return children;
  } 

  const router = createBrowserRouter([
    {
      path: "/",
      element: (    
        <ProtectedRoutes>
          <Layout/>
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

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
