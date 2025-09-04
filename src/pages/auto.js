import octvv7 from "../img/catalogAuto/octvv7.jpg";


const Auto = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Catalog Auto</h2>
        <ul className="projects">
          <li className="project">
            <img src={octvv7} alt="Auto 1" className="project__img" />
            <h3 className="project__title">Porsche Cayenne Turbo GT</h3>
            <h4 className="price">50000lei</h4>
          </li>
         
        </ul>
      </div>
    </main>
  );
};

export default Auto;