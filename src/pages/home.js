const Home = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Hi, my name is <em>Vladislav</em></strong><br />
            
          </h1>
          <div className="header__text">
            <p></p>
          </div>
          <a href="#!" className=""></a>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;