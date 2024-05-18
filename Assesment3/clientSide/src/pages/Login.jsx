import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      setMessage(response.data.message);
      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className=" h-screen flex flex-col items-center justify-center space-y-6">
      <div className="space-y-2 bg-slate-100 p-6 rounded-md">
        <div className=" text-center">
          <p>Hint</p>
          <p>Hover below to reveal</p>
        </div>
        <div className=" text-slate-100 hover:text-black">
          <p>Username: fayazuser</p>
          <p>Password: password123</p>
        </div>
      </div>
      <Link to="/" className=" text-xl underline">
        Go Back
      </Link>
      <h2 className=" text-3xl">Login</h2>
      <form onSubmit={handleLogin}>
        <div className=" space-y-6 bg-slate-100 p-6 rounded-md">
          <div className=" space-x-3">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-1"
              required
            />
          </div>
          <div className=" space-x-3">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-1"
              required
            />
          </div>
          <button
            type="submit"
            className=" border bg-red-500 p-2 flex justify-center items-center rounded-md text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 w-full"
          >
            Login
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
