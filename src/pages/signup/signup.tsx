import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.scss";
import { BASEURL } from "../../utils/urls";

const Signup = () => {

  const [inputs, setInputs] = useState({
    username: undefined,
    email: undefined,
    name: undefined,
    password: undefined,
  });

  const [error, setError] = useState(undefined);
  const navigate = useNavigate();

  const inputChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const signup =  async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try{
      const response = await axios.post(`${BASEURL}/auth/register`, inputs);
      if(response.status === 200) navigate("/login");
    } catch(err : any) {
      setError(err.response.data);
    }
  }

  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h1>Register Now</h1>
          <form>
            <input type="text" placeholder="Name" name="name" onChange={inputChangeHandler}/>
            <input type="text" placeholder="Username" name="username" onChange={inputChangeHandler}/>
            <input type="email" placeholder="Email" name="email" onChange={inputChangeHandler}/>
            <input type="password" placeholder="Password" name="password" onChange={inputChangeHandler}/>
            {error && <span>{error}</span>}
            <button  onClick={signup}>Signup</button>
          </form>
        </div>
        <div className="right">
          <h1>Social App</h1>
          <p>Connect World Together with Social App</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup;