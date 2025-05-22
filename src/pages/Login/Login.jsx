import React, { useState } from "react";
import Header from "@components/layout/Header/Header";
import Footer from "@components/layout/Footer/Footer";
import { Button } from "@components/ui/Button/Button";
import { Input } from "@components/ui/Input/Input";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: false, password: false });

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {
      username: username.trim() === "",
      password: password.trim() === "",
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.username === username);

    if (!existingUser) {
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Пользователь зарегистрирован!");
    } else {
      alert("Добро пожаловать!");
    }
  };

  return (
    <>
      <Header />
      <section className="login-section">
        <h2 className="login-title">Log in</h2>
        <div className="login-wrapper">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-row">
              <label className="login-label" htmlFor="username">User name</label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`login-input ${errors.username ? "error" : ""}`}
              />
            </div>

            <div className="login-row">
              <label className="login-label" htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`login-input ${errors.password ? "error" : ""}`}
              />
            </div>

            <div className="login-buttons">
              <Button type="submit">Submit</Button>
              <Button type="button" className="login-button cancel">Cancel</Button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
