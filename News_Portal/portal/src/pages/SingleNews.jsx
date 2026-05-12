import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newsData from "../data/newsData";
import axios from "axios";

function SingleNews() {

  const { id } = useParams();

  const [news, setNews] = useState(null);

  useEffect(() => {

    fetchSingleNews();

  }, []);

  const fetchSingleNews = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/news/all`
      );

      let selectedNews = response.data.find(
        (item) => item._id === id
      );

      if (!selectedNews) {

        selectedNews = newsData.find(
          (item) => item.id.toString() === id
        );

      }

      setNews(selectedNews);

    } catch (error) {

      console.log(error);

    }
  };

  if (!news) {
    return (
      <div className="container mt-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <h1 className="mb-4">
        {news.title}
      </h1>

      <img
        src={news.image}
        alt="news"
        className="img-fluid rounded mb-4"
        style={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "cover",
        }}
      />

      <h5 className="text-secondary mb-3">
        Category: {news.category}
      </h5>

      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
        {news.content}
      </p>

    </div>
  );
}

export default SingleNews;