import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditNews() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
    status: "",
  });

  useEffect(() => {

    fetchSingleNews();

  }, []);

  const fetchSingleNews = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/news/all`
      );

      const selectedNews = response.data.find(
        (item) => item._id === id
      );

      setFormData(selectedNews);

    } catch (error) {

      console.log(error);

    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/news/update/${id}`,
        formData
      );

      alert("News Updated");

      navigate("/admin/manage-news");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="container mt-5">

      <div className="card p-3 p-md-4 shadow">

        <h2 className="mb-4">
          Edit News
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            className="form-control mb-3"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            className="form-control mb-3"
            value={formData.category}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            className="form-control mb-3"
            value={formData.image}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="content"
            className="form-control mb-3"
            value={formData.content}
            onChange={handleChange}
          ></textarea>

          <select
            name="status"
            className="form-select mb-3"
            value={formData.status}
            onChange={handleChange}
          >

            <option>Draft</option>
            <option>Scheduled</option>
            <option>In-review</option>
            <option>Published</option>

          </select>

          <button className="btn btn-dark">
            Update News
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditNews;