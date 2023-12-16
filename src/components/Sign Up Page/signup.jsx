// SignUp.js

import React, { useState } from "react";
import "../../styles/Sign Up Page/signup.css";
import { Link, useNavigate } from "react-router-dom";
import finder from "../../assets/finder1.png";
import arrow from "../../assets/arrow.svg";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Customer");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Save user details in local storage
    const existData = localStorage.getItem("userData");
    const data = existData !== null ? JSON.parse(existData) : [];
    const personalData = {
      fname: firstName,
      lname: lastName,
      uname: username,
      password: password,
      utype: userType,
    };
    const isValid =
      personalData.fname &&
      personalData.lname &&
      personalData.uname &&
      personalData.password &&
      personalData.utype;

    if (!isValid) {
      alert("Please fill in all the details.");
    } else if (userType === "Provider") {
      data.unshift(personalData);
      localStorage.setItem("userData", JSON.stringify(data));
      navigate("/provider_signup");
    } else {
      data.unshift(personalData);
      localStorage.setItem("userData", JSON.stringify(data));
      navigate("/");
    }
  };

  return (
    <div id="background">
      <div className="flex float_card">
        <div className="image">
          <img src={finder} alt="Local Service Finder"></img>
        </div>
        <div className="signup">
          <div className="back">
            <Link className="go_back_image" to="/">
              <img src={arrow} alt="Go back"></img>
            </Link>
            <p>Back</p>
          </div>
          <h2 className="signup_h2">Create an account</h2>
          <h4 className="signup_h4">Let's get started</h4>
          <form className="form_sign_up">
            <div className="first_row">
              <label className="first_name">
                <h2>First Name</h2>
                <input
                  className="first_name_text_input"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label className="last_name">
                <h2>Last Name</h2>
                <input
                  className="last_name_text_input"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
            <div className="second_row">
              <label className="user_name">
                <h2>Username</h2>
                <input
                  className="username_text_input"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>

              <label className="pass_label">
                <h2>Password</h2>

                <input
                  type="password"
                  className="pass_text_input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <label className="type_label">
              <h2>Type :</h2>
              <select
                className="select"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="Customer">Customer</option>
                <option value="Provider">Provider</option>
              </select>
            </label>
            <br />
            {userType === "Provider" ? (
              <button className="next_btn" type="button" onClick={handleSignUp}>
                Next
              </button>
            ) : (
              <button
                className="signup_btn"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            )}
          </form>
          {userType === "Customer" ? (
            <p className="log_in">
              Already have an account?{" "}
              <Link className="link_signup" to="/">
                Login
              </Link>
            </p>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
