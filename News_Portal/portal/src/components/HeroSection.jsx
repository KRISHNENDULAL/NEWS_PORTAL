import newsData from "../data/newsData";
import { Link } from "react-router-dom";

function HeroSection() {

  const heroNews = newsData[0];

  return (
    <div className="container mt-4">

      <div className="row">

        {/* Main Hero */}
        <div className="col-lg-8 mb-4">

          <div className="card border-0">

            <img
              src={heroNews.image}
              alt="hero"
              className="card-img-top"
              style={{
                height: "450px",
                objectFit: "cover",
              }}
            />

            <div className="card-body bg-dark text-white">

              <h2>
                {heroNews.title}
              </h2>

              <p>
                {heroNews.description}
              </p>

              <Link
                to={`/news/${heroNews.id}`}
                className="btn btn-light"
              >
                Read Full Story
              </Link>

            </div>

          </div>

        </div>

        {/* Side News */}
        <div className="col-lg-4">

          {newsData.slice(1).map((news) => (

            <div className="card mb-4" key={news.id}>

              <img
                src={news.image}
                alt="news"
                className="card-img-top"
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">

                <h5>
                  {news.title}
                </h5>

                <Link
                  to={`/news/${news.id}`}
                  className="btn btn-dark btn-sm"
                >
                  Read More
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default HeroSection;