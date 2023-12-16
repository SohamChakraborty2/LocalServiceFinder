import React, { useState } from "react";
import "../../styles/Sign Up Page/login.css";
import { Link, useNavigate } from "react-router-dom";
import finder from "../../assets/finder1.png";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUserDetails = localStorage.getItem("userData");

    if (storedUserDetails) {
      const allUsers = JSON.parse(storedUserDetails);

      const matchedUser = allUsers.find((user) => user.uname === username);

      if (matchedUser && matchedUser.password === password) {
        // If matched than navigate to other or Home page
        alert("Sucessful Logged In");
        navigate("/application");
      } else if (matchedUser == null) {
        alert("User not found");
      } else {
        alert("Invalid username or password");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <div id="background">
      <div className="flex float_card">
        <div className="image">
          <img src={finder} alt="Local Service Finder"></img>
        </div>
        <div className="login">
          <h2 className="login_h2">
            Welcome to <span>Local Service Finder</span>
          </h2>
          <h4 className="login_h4">Please enter your details</h4>
          <br />
          <form>
            <label className="user_label">
              <h2 className="user_h2">Username</h2>
              <input
                className="text_input"
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label className="pass_label">
              <h2 className="pass_h2">Password</h2>
              <input
                className="text_input"
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <div className="rem_forgot">
              <label className="rem_flex">
                <input className="checkbox_input" type="checkbox" />
                <h4>Remember me</h4>
              </label>
              <p className="f_pass">Forgot password</p>
            </div>
            <button className="login_btn" type="button" onClick={handleLogin}>
              Log In
            </button>
          </form>
          <p className="sign_up">
            Don't have an account?{" "}
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
