import { useParams } from "react-router-dom";
import newsData from "../data/newsData";

function SingleNews() {

  const { id } = useParams();

  const news = newsData.find(
    (item) => item.id === parseInt(id)
  );

  if (!news) {
    return (
      <div className="container mt-5">
        <h2>News Not Found</h2>
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

      <p style={{ fontSize: "18px" }}>
        {news.content}
      </p>

    </div>
  );
}

export default SingleNews;