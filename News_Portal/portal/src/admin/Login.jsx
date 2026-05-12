import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {


    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === (localStorage.getItem("adminPassword") || "admin123")
    ) {

      localStorage.setItem("admin", "true");

      // alert("Login Successful");

      navigate("/admin/manage-news");

    } else {

      alert("Invalid Email or Password");

    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >

      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >

        <h2 className="text-center mb-4">
          Admin Login
        </h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-dark w-100">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;