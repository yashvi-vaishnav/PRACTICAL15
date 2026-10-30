
import React, { useRef, useState } from 'react';


function Login() {

  const usernameRef = useRef();
  const passwordRef = useRef();

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setSubmittedData({
      username: username,
      password: password
    });
  };

  return (
    <div className="login-container">

      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter Username"
          ref={usernameRef}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />

        <button type="submit">Login</button>

      </form>

      {submittedData && (
        <div className="result">
          <h3>Submitted Information</h3>

          <p>
            <b>Username:</b> {submittedData.username}
          </p>

          <p>
            <b>Password:</b> {submittedData.password}
          </p>
        </div>
      )}

    </div>
  );
}

export default Login;
