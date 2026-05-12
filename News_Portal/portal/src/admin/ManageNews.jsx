import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ManageNews() {

  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {

    fetchNews();

  }, []);

  const fetchNews = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/news/all`
      );

      setNews(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const deleteNews = async (id) => {

    try {

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/news/delete/${id}`
      );

      alert("News Deleted Successfully");

      fetchNews();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="container mt-5">

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">

        <h2 className="fw-bold">
          Manage News
        </h2>

        <div className="d-flex flex-wrap gap-2">

          <Link
            to="/admin/create-news"
            className="btn btn-success"
          >
            Add News
          </Link>

          <Link
            to="/admin/profile"
            className="btn btn-info text-white"
          >
            Profile
          </Link>

          <Link
            to="/admin/change-password"
            className="btn btn-primary"
          >
            Change Password
          </Link>

          <button
            className="btn btn-dark"
            onClick={() => {
              localStorage.removeItem("admin");
              window.location.href = "/admin";
            }}
          >
            Logout
          </button>

        </div>

      </div>

      <div className="mb-3 d-flex flex-wrap gap-2">

        <button
          className="btn btn-dark me-2"
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className="btn btn-secondary me-2"
          onClick={() => setFilter("Draft")}
        >
          Draft
        </button>

        <button
          className="btn btn-secondary me-2"
          onClick={() => setFilter("Scheduled")}
        >
          Scheduled
        </button>

        <button
          className="btn btn-secondary me-2"
          onClick={() => setFilter("In-review")}
        >
          In-review
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setFilter("Published")}
        >
          Published
        </button>

      </div>

      <div className="table-responsive">

        <table className="table table-bordered align-middle">

          <thead className="table-dark">

            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {news
              .filter((item) =>
                filter === "All"
                  ? true
                  : item.status === filter
              )
              .map((item) => (

                <tr key={item._id}>

                  <td>{item.title}</td>

                  <td>{item.category}</td>

                  <td>{item.status}</td>

                  <td>

                    <Link
                      to={`/admin/edit-news/${item._id}`}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteNews(item._id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageNews;