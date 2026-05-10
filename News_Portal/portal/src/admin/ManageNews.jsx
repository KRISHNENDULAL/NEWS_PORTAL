import newsData from "../data/newsData";

function ManageNews() {
  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        Manage News
      </h2>

      <ul className="nav nav-tabs mb-4">

        <li className="nav-item">
          <button className="nav-link active">
            All
          </button>
        </li>

        <li className="nav-item">
          <button className="nav-link">
            Draft
          </button>
        </li>

        <li className="nav-item">
          <button className="nav-link">
            Scheduled
          </button>
        </li>

        <li className="nav-item">
          <button className="nav-link">
            In-review
          </button>
        </li>

        <li className="nav-item">
          <button className="nav-link">
            Published
          </button>
        </li>

      </ul>

      <div className="table-responsive">

        <table className="table table-bordered">

          <thead className="table-dark">

            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {newsData.map((news) => (

              <tr key={news.id}>

                <td>{news.title}</td>
                <td>{news.category}</td>
                <td>{news.status}</td>

                <td>

                  <button className="btn btn-sm btn-primary me-2">
                    Edit
                  </button>

                  <button className="btn btn-sm btn-danger">
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