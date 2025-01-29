import React from "react";

function HP() {
  return (
    <div className="container">
      <div className="first">
        <p>Welcome to React App</p>
        <p>To track the React Code...</p>
        <img
          src="https://static1.makeuseofimages.com/wp-content/uploads/2014/09/tech-change-world.jpg"
          alt=""
        />
      </div>
      <div className="sec">
        <div className="formcard">
          <div>
            <h2>Register</h2>
          </div>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div>
            <label>Confarm Password</label>
            <input
              type="password"
              placeholder="Confarm your password"
              required
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HP;
