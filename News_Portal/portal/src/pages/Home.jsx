import HeroSection from "../components/HeroSection";
import NewsCard from "../components/NewsCard";

import newsData from "../data/newsData";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <HeroSection />

      {/* General News Section */}
      <div className="container mt-5">

        <h2 className="mb-4 fw-bold">
          Latest News
        </h2>

        <div className="row">

          {newsData.map((news) => (

            <div
              className="col-md-4 mb-4"
              key={news.id}
            >
              <NewsCard news={news} />
            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;