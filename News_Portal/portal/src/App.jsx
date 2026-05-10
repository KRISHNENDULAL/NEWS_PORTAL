import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        NewsPortal
      </Link>

      <div className="navbar-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>

        <Link className="nav-link" to="/category/technology">
          Technology
        </Link>

        <Link className="nav-link" to="/admin/login">
          Admin
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center p-5">
        <h1>Welcome to NewsPortal</h1>
        <p>Latest News Around the World</p>
      </div>

      {/* News Section */}
      <div className="container mt-5">
        <h2 className="mb-4">Latest News</h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
                className="card-img-top"
                alt="news"
              />

              <div className="card-body">
                <h5 className="card-title">Technology News</h5>

                <p className="card-text">
                  Latest updates from technology world.
                </p>

                <button className="btn btn-dark">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
                className="card-img-top"
                alt="news"
              />

              <div className="card-body">
                <h5 className="card-title">Sports News</h5>

                <p className="card-text">
                  Latest updates from sports world.
                </p>

                <button className="btn btn-dark">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
                className="card-img-top"
                alt="news"
              />

              <div className="card-body">
                <h5 className="card-title">Political News</h5>

                <p className="card-text">
                  Latest political updates and headlines.
                </p>

                <button className="btn btn-dark">
                  Read More
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Category() {
  return (
    <div className="container mt-5">
      <h1>Category Page</h1>
    </div>
  );
}

function SingleNews() {
  return (
    <div className="container mt-5">
      <h1>Single News Page</h1>
    </div>
  );
}

function Login() {
  return (
    <div className="container mt-5">
      <h1>Admin Login</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;