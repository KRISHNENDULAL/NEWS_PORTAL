function CreateNews() {
  return (
    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="mb-4">
          Create News
        </h2>

        <input
          type="text"
          placeholder="News Title"
          className="form-control mb-3"
        />

        <input
          type="text"
          placeholder="Category"
          className="form-control mb-3"
        />

        <input
          type="text"
          placeholder="Image URL"
          className="form-control mb-3"
        />

        <textarea
          rows="5"
          placeholder="News Content"
          className="form-control mb-3"
        ></textarea>

        <select className="form-select mb-3">

          <option>Draft</option>
          <option>Scheduled</option>
          <option>In-review</option>
          <option>Published</option>

        </select>

        <button className="btn btn-dark">
          Publish News
        </button>

      </div>

    </div>
  );
}

export default CreateNews;