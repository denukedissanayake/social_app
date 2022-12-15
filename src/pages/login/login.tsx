import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social App</h1>
          <p>Connect World Together with Social App</p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;