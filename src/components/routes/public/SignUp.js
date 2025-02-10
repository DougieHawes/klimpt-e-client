import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "./style.scss";

const SignUp = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signup`,
        formData
      );

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Route1
      content={
        <div className="auth-route">
          <form className="form">
            <Input1
              name="username"
              onChange={handleChange}
              placeholder="enter username..."
              value={username}
            />
            <Input1
              name="email"
              onChange={handleChange}
              placeholder="enter email..."
              value={email}
            />
            <Input1
              name="password"
              onChange={handleChange}
              password={true}
              placeholder="enter password..."
              value={password}
            />
            <Input1
              name="confirmPassword"
              onChange={handleChange}
              password={true}
              placeholder="confirm password..."
              value={confirmPassword}
            />
            <Button1
              darkMode={darkMode}
              onClick={handleSubmit}
              text="sign in"
            />
            <p className="auth-route-link-container">
              already registered? sign in
              <Link className="auth-route-link" to="/signin">
                here
              </Link>
            </p>
          </form>
        </div>
      }
      title="sign up"
    />
  );
};

export default SignUp;
