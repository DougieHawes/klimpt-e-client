import axios from "axios";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "./style.scss";

const SignIn = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signin`,
        formData
      );

      setFormData({
        email: "",
        password: "",
      });

      localStorage.setItem("token", response.data.token);

      navigate("/dashboard");
      window.location.reload();
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
            <Button1
              darkmode={darkMode}
              onClick={handleSubmit}
              text="sign in"
            />
            <p className="auth-route-link-container">
              not yet registered? sign up
              <Link className="auth-route-link" to="/signup">
                here
              </Link>
            </p>
          </form>
        </div>
      }
      title="sign in"
    />
  );
};

export default SignIn;
