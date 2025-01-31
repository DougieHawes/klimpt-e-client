import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "DougieHawes",
    email: "dougiehawes@hotmail.com",
    password: "Wittgenstein42",
    confirmPassword: "Wittgenstein42",
  });

  const { username, email, password, confirmPassword } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.post("http://localhost:5000/user", formData);

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
    <div>
      <Link to="/">sign in</Link>
      <form onSubmit={handleSubmit}>
        <input name="username" onChange={handleChange} value={username} />
        <input name="email" onChange={handleChange} value={email} />
        <input name="password" onChange={handleChange} value={password} />
        <input
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
