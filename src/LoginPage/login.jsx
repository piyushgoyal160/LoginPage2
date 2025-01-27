import { useState } from "react";
import "./login.css";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCancelClick = () => {
    setShowLogin(false);
  };

  return (
    <div>
      {!showLogin ? (
        <div className="login-page">
          <button className="initial-login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      ) : (
        <div className="main login-form">
          <div className="image">
            <button className="x-button" onClick={handleCancelClick}>
              ×
            </button>
            <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="image"
            />
          </div>
          <form className="details">
            <fieldset>
              <label>Username</label>
              {/* <br /> */}
              <input
                className="blank"
                type="text"
                placeholder="Enter Username"
                autoComplete="off"
              />
            </fieldset>
            <fieldset>
              <label>Password</label>
              {/* <br /> */}
              <input
                className="blank"
                type="password"
                placeholder="Enter password"
              />
            </fieldset>

            <button type="submit" className="login-btn">
              Log in
            </button>
            <div className="checkbox">
              <input type="checkbox" id="keep-logged-in" />
              <label className="logged-in" htmlFor="keep-logged-in">
                Remember Me
              </label>
            </div>
          </form>
          <div className="cancel-div">
            <button className="cancel-button" onClick={handleCancelClick}>
              Cancel
            </button>
            <span className="forget">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
