function ChangePassword() {
  return (
    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="mb-4">
          Change Password
        </h2>

        <input
          type="password"
          placeholder="Old Password"
          className="form-control mb-3"
        />

        <input
          type="password"
          placeholder="New Password"
          className="form-control mb-3"
        />

        <button className="btn btn-dark">
          Update Password
        </button>

      </div>

    </div>
  );
}

export default ChangePassword;