import "./Login.css";

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Login">
      <picture>Your Logo</picture>
      <form className="Login-form" onSubmit={handleSubmit}>
        <section className="title">
          <h3>Login</h3>
        </section>
        <section>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            placeholder="username@gmail.com"
            name="username"
          />
        </section>
        <section>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </section>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
