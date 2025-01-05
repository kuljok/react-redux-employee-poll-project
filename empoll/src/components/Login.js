import { useState, useRef } from "react";
import { connect, useSelector } from "react-redux";
import "./Login.css";

const Login = ({ dispatch, users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const userNameRef = useRef(null);

  const handleUsernameChange = (e) => {
    const text = e.target.value;
    setUsername(text);
    if (invalidLogin) {
      setInvalidLogin(false);
    }
  };

  const handlePasswordChange = (e) => {
    const text = e.target.value;
    setPassword(text);
    if (invalidLogin) {
      setInvalidLogin(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = Object.keys(users).find((id) => id === username);
    if (!foundUser) {
      setUsername("");
      setPassword("");
      setInvalidLogin(true);
      userNameRef.current.focus();
      return;
    }
  };

  return (
    <div className="Login">
      <picture>Your Logo</picture>
      <form
        className={`Login-form ${invalidLogin ? "error" : ""}`}
        onSubmit={handleSubmit}
      >
        <section className="title">
          <h3>Login</h3>
        </section>
        <div className="error-message">
          Invalid username or password. <br />
          Please try again.
        </div>

        <section>
          <label htmlFor="username">Username</label>
          <input
            ref={userNameRef}
            type="text"
            id="username"
            placeholder="username"
            name="username"
            onChange={handleUsernameChange}
            value={username}
          />
        </section>
        <section>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </section>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Login);
