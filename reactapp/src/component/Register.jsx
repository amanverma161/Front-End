import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/app.css";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function doReg() {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="a">
      <div className="formcard">
        <div>
          <h2>Register</h2>
        </div>
        <form onSubmit={doReg}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={inputs.name || ""}
              onChange={handleChange}
              name="name"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={inputs.email || ""}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={inputs.pass || ""}
              onChange={handleChange}
              name="pass"
              required
            />
          </div>
          <div>
            <label>Confarm Password</label>
            <input
              type="password"
              placeholder="Confarm your password"
              value={inputs.cnfpass || ""}
              onChange={handleChange}
              name="cnfpass"
              required
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
          <div>
            <span>
              Already a user! <Link to="/">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
