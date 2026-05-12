import { Link } from "react-router-dom";

function NewsCard({ news }) {

  return (
    <div className="card h-100 shadow-sm">

      <img
        src={news.image}
        className="card-img-top"
        alt="news"
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">

        <h5 className="card-title">
          {news.title}
        </h5>

        <p className="text-secondary">
          {news.category}
        </p>

        <Link
          to={`/news/${news._id}`}
          className="btn btn-dark mt-auto"
        >
          Read More
        </Link>

      </div>

    </div>
  );
}

export default NewsCard;