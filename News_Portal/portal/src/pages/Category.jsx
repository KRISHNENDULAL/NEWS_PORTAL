import { useParams } from "react-router-dom";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";

function Category() {

  const { name } = useParams();

  const filteredNews = newsData.filter(
    (news) => news.category === name
  );

  return (
    <div className="container mt-5">

      <h2 className="mb-4 fw-bold">
        {name} News
      </h2>

      <div className="row">

        {filteredNews.map((news) => (

          <div
            className="col-md-4 mb-4"
            key={news.id}
          >
            <NewsCard news={news} />
          </div>

        ))}

      </div>

    </div>
  );
}

export default Category;