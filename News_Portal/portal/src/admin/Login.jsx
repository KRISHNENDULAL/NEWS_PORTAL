function Login() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >

      <div
        className="card p-4 shadow"
        style={{ width: "400px" }}
      >

        <h2 className="text-center mb-4">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
        />

        <button className="btn btn-dark">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;