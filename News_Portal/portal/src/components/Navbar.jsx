import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-3">

      <Link className="navbar-brand fw-bold fs-3" to="/">
        BBC NEWS
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">

        <div className="navbar-nav ms-auto">

          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          <Link className="nav-link text-white" to="/category/Technology">
            Technology
          </Link>

          <Link className="nav-link text-white" to="/category/Sports">
            Sports
          </Link>

          <Link className="nav-link text-white" to="/category/Politics">
            Politics
          </Link>

          <Link className="nav-link text-warning" to="/admin/login">
            Admin
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;