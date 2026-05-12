import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NewsCard from "../components/NewsCard";

function CategoryPage() {

  const { category } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {

    fetchCategoryNews();

  }, [category]);

  const fetchCategoryNews = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/news/all`
      );

      const filteredNews = response.data.filter(
        (item) =>
          item.category.toLowerCase() ===
          category.toLowerCase()
      );

      setNews(filteredNews);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4 fw-bold">
        {category} News
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
  );
}

export default CategoryPage;