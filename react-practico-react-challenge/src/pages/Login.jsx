import React, { useRef } from "react";
import "../styles/Login.scss";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
	event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"), //es similar a getElementById solo que lo encuentra por su atributo name y solo nos devuelve el valor
    };
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="matias@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Login
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
