import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {

  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = (e) => {

    e.preventDefault();

    const savedPassword =
      localStorage.getItem("adminPassword") ||
      "admin123";

    if (oldPassword === savedPassword) {

      localStorage.setItem(
        "adminPassword",
        newPassword
      );

      alert("Password Changed Successfully. Please login again.");

      localStorage.removeItem("admin");
      navigate("/admin");

    } else {

      alert("Old Password Incorrect");

    }
  };

  return (
    <div className="container mt-5">

      <div
        className="card shadow p-4 mx-auto"
        style={{ width: "100%", maxWidth: "450px" }}
      >

        <h2 className="mb-4 text-center">
          Change Password
        </h2>

        <form onSubmit={handleChangePassword}>

          <input
            type="password"
            placeholder="Old Password"
            className="form-control mb-3"
            value={oldPassword}
            onChange={(e) =>
              setOldPassword(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="New Password"
            className="form-control mb-3"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
          />

          <button className="btn btn-dark w-100">
            Update Password
          </button>

        </form>

      </div>

    </div>
  );
}

export default ChangePassword;