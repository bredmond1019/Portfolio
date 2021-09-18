import React from "react";

export default function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setToken(true);
  };

  return (
    <div className="login-wrapper">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input type="text" />
        </label>
        <label>
          <p>Password:</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
