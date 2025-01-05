import { useState, useRef } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import "./Login.css";

const Login = ({ dispatch, users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const userNameRef = useRef(null);
  const loginRef = useRef(null);
  const [hidden, setHidden] = useState(false);

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
    if (!foundUser || users[foundUser].password !== password) {
      setUsername("");
      setPassword("");
      setInvalidLogin(true);
      userNameRef.current.focus();
      return;
    }

    setHidden(true);

    setTimeout(() => {
      dispatch(setAuthedUser(foundUser));
    }, 300);
  };

  return (
    <div className={`Login ${hidden ? "hide" : ""}`} ref={loginRef}>
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
