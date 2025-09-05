import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Premium <em>Auto</em> Collection</strong><br />
            Discover Your Dream Car
          </h1>
          <div className="header__text">
            <p>Explore our curated selection of luxury and performance vehicles. From sports cars to SUVs, find the perfect car that matches your style and needs.</p>
          </div>
          <Link to="/auto" className="btn">
            Browse Cars
          </Link>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Why Choose Us?</h2>
              <p>
                We offer a carefully curated selection of premium vehicles with detailed information, 
                high-quality images, and comprehensive filtering options to help you find exactly what you're looking for.
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Our Features</h2>
              <p>
                Advanced search and filtering, real-time API integration, responsive design, 
                and modern UI components for the best car browsing experience.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;