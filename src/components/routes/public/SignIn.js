import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "http://localhost:5000/user/signin",
        formData
      );

      setFormData({
        email: "",
        password: "",
      });

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Link to="/signup">sign up</Link>
      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} value={email} />
        <input name="password" onChange={handleChange} value={password} />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default SignIn;
