import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./style.scss";

export const Input1 = ({
  name,
  onChange,
  password = false,
  placeholder,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container">
      <input
        className="input input1"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={password ? (showPassword ? "text" : "password") : "text"}
        value={value}
      />
      {password && (
        <>
          {showPassword ? (
            <FaEyeSlash
              className="input-password-toggle"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaEye
              className="input-password-toggle"
              onClick={() => setShowPassword(true)}
            />
          )}
        </>
      )}
    </div>
  );
};
