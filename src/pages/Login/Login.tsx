import React, { useState, FormEvent, ChangeEvent } from "react";

import { Button } from "@components/ui/Button/Button";
import { Input } from "@components/ui/Input/Input";
import type { User, Errors } from "types";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({
    username: false,
    password: false,
  });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {
      username: username.trim() === "",
      password: password.trim() === "",
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    const storedUsers = localStorage.getItem("users");
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

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
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                className={`login-input ${errors.username ? "error" : ""}`}
              />
            </div>

            <div className="login-row">
              <label className="login-label" htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
    </>
  );
};

export default Login;
