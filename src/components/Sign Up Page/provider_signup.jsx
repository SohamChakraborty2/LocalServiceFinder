// ProviderSignUp.js

import React, { useState } from "react";
import "../../styles/Sign Up Page/provider_signup.css";
import { Link, useNavigate } from "react-router-dom";
import finder from "../../assets/finder1.png";
const ProviderSignUp = () => {
  const [businessName, setBusinessName] = useState("");
  const [services, setServices] = useState("Electrical services");
  const [selectedState, setSelectedState] = useState("Andhra Pradesh");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleProviderSignUp = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const providerData = {
      bname: businessName,
      services: services,
      state: selectedState,
      phone: phoneNumber,
    };

    const isValidPhoneNumber = /^[6-9]\d{9}$/.test(phoneNumber);

    const isValid =
      providerData.bname &&
      providerData.services &&
      providerData.state &&
      isValidPhoneNumber;

    if (!isValid) {
      if (!isValidPhoneNumber) {
        alert(
          "Mobile number is incorrect. Please enter a valid 10-digit number ."
        );
      } else {
        alert("Please fill in all the details.");
      }
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
            <div className="one_row">
              <label className="row_state">
                <h2>State</h2>
                <select
                  className="stateSelect"
                  name="state"
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                  }}
                >
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </label>

              <label className="row_phone_no">
                <h2>Phone No.</h2>
                <input
                  className="phone_prefix"
                  type="text"
                  value={"+91"}
                  readOnly
                />
                <input
                  className="phone_number"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  type="number"
                />
              </label>
            </div>
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
            <label className="Buisness_name">
              <h2>Business Name</h2>
              <input
                className="buisness_input"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </label>

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
