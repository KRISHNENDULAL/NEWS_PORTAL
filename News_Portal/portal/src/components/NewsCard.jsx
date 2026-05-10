import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <div className="card h-100 shadow-sm">

      <img
        src={news.image}
        className="card-img-top"
        alt="news"
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body">

        <h5 className="card-title">
          {news.title}
        </h5>

        <p className="card-text">
          {news.description}
        </p>

        <Link
          to={`/news/${news.id}`}
          className="btn btn-dark"
        >
          Read More
        </Link>

      </div>

    </div>
  );
}

export default NewsCard;