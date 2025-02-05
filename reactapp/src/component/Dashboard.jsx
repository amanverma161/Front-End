import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/img/svg.svg";

function Dashboard() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function doLogin() {
    event.preventDefault();
    console.log("clicked", inputs);
    if (inputs.pass.length > 8) {
      navigate("/dashboard");
    } else {
      setError(true);
    }
  }
  return (
    <div className="container">
      <div className="first">
        <p>Please add your code...</p>
        <img src={img} alt="" />
      </div>
      <div className="sec">
        <div className="formcard">
          <div>
            <h2>Add Code...</h2>
          </div>
          <form onSubmit={doLogin}>
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
              />
            </div>
            {error ? (
              <div>
                <span style={{ color: "red", alignSelf: "center" }}>
                  Password length must be greater than 8
                </span>
              </div>
            ) : null}

            <div>
              <button type="submit">Login</button>
            </div>
            <div>
              <span>
                Not a user ?<Link to="/register">Register</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
