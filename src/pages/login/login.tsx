import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASEURL } from "../../utils/urls";
import "./login.scss";

const Login = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: undefined,
    password: undefined,
  });

  const [error, setError] = useState(undefined);

  const inputChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const loginHandler =  async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try{
      const response = await axios.post(`${BASEURL}/auth/login`, inputs, {
        withCredentials: true,
      });
      login(response.data);
      navigate("/");
    } catch(err : any) {
      setError(err?.response?.data);
    }
  }
  
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social App</h1>
          <p>Connect World Together with Social App</p>
          <span>Don't you have an account?</span>
          <Link to="/signup">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={inputChangeHandler}/>
            <input type="password" placeholder="Password" name="password" onChange={inputChangeHandler}/>
            {error && <span>{error}</span>}
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;