"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const mockLogin = (username: string, password: string) => {
  // Mock authentication logic
  return username === "user" && password === "password";
};

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (mockLogin(username, password)) {
      router.push("/feed");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
