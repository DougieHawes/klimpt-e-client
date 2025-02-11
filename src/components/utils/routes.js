import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

// for AUTH routes
export const Route1 = ({ content, title }) => {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/auth/validate`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setIsValid(res.data.valid);
      } catch (error) {
        setIsValid(false);
      }
    };

    if (token) verifyToken();
    else setIsValid(false);
  }, [token]);

  if (isValid === null) {
    return <div>loading...</div>;
  }

  if (isValid) {
    return <>{navigate("/")}</>;
  } else {
    return (
      <div className="route route1">
        <h2 className="route-title">{title}</h2>
        {content}
      </div>
    );
  }
};

// for USER routes
export const Route2 = ({ content, title }) => {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/auth/validate`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setIsValid(res.data.valid);
      } catch (error) {
        setIsValid(false);
      }
    };

    if (token) verifyToken();
    else setIsValid(false);
  }, [token]);

  if (isValid === null) {
    return <div>loading...</div>;
  }

  if (!isValid) {
    return <>{navigate("/signin")}</>;
  } else {
    return (
      <div className="route route2">
        <h2 className="route-title">{title}</h2>
        {content}
      </div>
    );
  }
};
