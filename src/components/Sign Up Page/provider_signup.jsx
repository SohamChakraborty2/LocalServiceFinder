// ProviderSignUp.js

import React, { useState } from "react";
import "../../styles/Sign Up Page/provider_signup.css";
import { Link, useNavigate } from "react-router-dom";
import finder from "../../assets/finder1.png";
const ProviderSignUp = () => {
  const [businessName, setBusinessName] = useState("");
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const handleProviderSignUp = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const providerData = {
      bname: businessName,
      services: services,
    };

    const isValid = providerData.bname && providerData.services;

    if (!isValid) {
      alert("Please fill in all the details.");
    } else {
      userData[0] = { ...userData[0], ...providerData };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    }
  };
  return (
    <div id="background">
      <div className="flex float_card">
        <div className="image">
          <img src={finder} alt="Local Service Finder"></img>
        </div>
        <div className="provider_signup">
          <h2 className="provider_signup_h2">Additional Information</h2>
          <form className="Provider_signup_form">
            <label className="Buisness_name">
              <h2>Business Name</h2>
              <input
                className="buisness_input"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </label>

            <label className="services_tag">
              <h2>Services</h2>
              <select
                className="services_input services"
                value={services}
                onChange={(e) => setServices(e.target.value)}
              >
                <option value="Electrical services">Electrical services</option>
                <option value="Plumbing repairs">Plumbing repairs</option>
                <option value="Door installation and repair">
                  Door installation and repairs
                </option>
                <option value="Carpentry and woodworking">
                  Carpentry and woodworking
                </option>
                <option value="Painting services">Painting services</option>
                <option value="Haircut and styling">Haircut and styling</option>
                <option value="Event photography and videography">
                  Event photography and videography
                </option>
                <option value="Software installation and troubleshooting">
                  Software installation and troubleshooting
                </option>
                <option value="Personal training and fitness coaching">
                  Personal training and fitness coaching
                </option>
                <option value="Web development and design">
                  Web development and design
                </option>
                <option value="Mobile app development">
                  Mobile app development
                </option>
                <option value="Window cleaning">Window cleaning</option>
                <option value="Pet grooming">Pet grooming</option>
                <option value="Marketing strategy consulting">
                  Marketing strategy consulting
                </option>
                <option value="Yoga instruction">Yoga instruction</option>
                <option value="Personal fitness training">
                  Personal fitness training
                </option>
                <option value="Nutrition consulting">
                  Nutrition consulting
                </option>
                <option value="Makeup artist services">
                  Makeup artist services
                </option>
              </select>
            </label>
            <br />
            <div className="p_signup_btn">
              <button
                className=" provider_btn"
                type="button"
                onClick={handleProviderSignUp}
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="signup_btn_provider">
            Already have an account?{" "}
            <Link className="signup_btn_provider_log_in" to="/">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderSignUp;
