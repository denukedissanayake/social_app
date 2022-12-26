import { Link } from "react-router-dom";
import "./signup.scss";

const Signup = () => {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h1>Register Now</h1>
          <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Signup</button>
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