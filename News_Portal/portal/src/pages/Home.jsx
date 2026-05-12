import { useEffect, useState } from "react";
import axios from "axios";

import HeroSection from "../components/HeroSection";
import NewsCard from "../components/NewsCard";

function Home() {

  const [news, setNews] = useState([]);

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

  return (
    <div>

      <HeroSection />

      <div className="container mt-5">

        <h2 className="mb-4 fw-bold">
          Latest News
        </h2>

        <div className="row">

          {news.map((item) => (

            <div
              className="col-md-4 mb-4"
              key={item._id}
            >

              <NewsCard news={item} />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;