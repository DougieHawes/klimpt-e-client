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
        type={showPassword ? "password" : "text"}
        value={value}
      />
      {password && (
        <>
          {showPassword ? (
            <FaEye
              className="input-password-toggle"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaEyeSlash
              className="input-password-toggle"
              onClick={() => setShowPassword(true)}
            />
          )}
        </>
      )}
    </div>
  );
};
