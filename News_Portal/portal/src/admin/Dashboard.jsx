import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-5">

      <h1 className="mb-5">
        Admin Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">

          <div className="card p-4 shadow-sm">

            <h4>Create News</h4>

            <Link
              to="/admin/create-news"
              className="btn btn-dark mt-3"
            >
              Open
            </Link>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card p-4 shadow-sm">

            <h4>Manage News</h4>

            <Link
              to="/admin/manage-news"
              className="btn btn-dark mt-3"
            >
              Open
            </Link>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card p-4 shadow-sm">

            <h4>My Profile</h4>

            <Link
              to="/admin/profile"
              className="btn btn-dark mt-3"
            >
              Open
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;